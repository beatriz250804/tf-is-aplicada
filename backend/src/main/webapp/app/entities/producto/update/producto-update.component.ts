import { Component, OnInit, inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ICliente } from 'app/entities/cliente/cliente.model';
import { ClienteService } from 'app/entities/cliente/service/cliente.service';
import { IProducto } from '../producto.model';
import { ProductoService } from '../service/producto.service';
import { ProductoFormGroup, ProductoFormService } from './producto-form.service';

@Component({
  selector: 'jhi-producto-update',
  templateUrl: './producto-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class ProductoUpdateComponent implements OnInit {
  isSaving = false;
  producto: IProducto | null = null;

  clientesSharedCollection: ICliente[] = [];

  protected productoService = inject(ProductoService);
  protected productoFormService = inject(ProductoFormService);
  protected clienteService = inject(ClienteService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: ProductoFormGroup = this.productoFormService.createProductoFormGroup();

  compareCliente = (o1: ICliente | null, o2: ICliente | null): boolean => this.clienteService.compareCliente(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ producto }) => {
      this.producto = producto;
      if (producto) {
        this.updateForm(producto);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const producto = this.productoFormService.getProducto(this.editForm);
    if (producto.id !== null) {
      this.subscribeToSaveResponse(this.productoService.update(producto));
    } else {
      this.subscribeToSaveResponse(this.productoService.create(producto));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProducto>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(producto: IProducto): void {
    this.producto = producto;
    this.productoFormService.resetForm(this.editForm, producto);

    this.clientesSharedCollection = this.clienteService.addClienteToCollectionIfMissing<ICliente>(
      this.clientesSharedCollection,
      producto.cliente,
    );
  }

  protected loadRelationshipsOptions(): void {
    this.clienteService
      .query()
      .pipe(map((res: HttpResponse<ICliente[]>) => res.body ?? []))
      .pipe(map((clientes: ICliente[]) => this.clienteService.addClienteToCollectionIfMissing<ICliente>(clientes, this.producto?.cliente)))
      .subscribe((clientes: ICliente[]) => (this.clientesSharedCollection = clientes));
  }
}
