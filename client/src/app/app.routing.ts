import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import {RouterModule, Routes} from '@angular/router'
import {ProductListComponent} from './products/product-list/product-list.component'
import {ProductsComponent} from './products/products.component'

const routes:Routes=[
    {
        path:'',
        component:ProductListComponent
    },
    {
        path:'add-product',
        component:AddProductComponent
    },
    {
        path:'edit-product',
        component:EditProductComponent
    }
];
export const routing=RouterModule.forRoot(routes)