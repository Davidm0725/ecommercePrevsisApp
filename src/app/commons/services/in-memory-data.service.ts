import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const data =
    {
      categorias: [
        {
          categoria: 'Autos',
          data: [
            {
              id: 123,
              fabricante: 'Chevrolet',
              nombre: 'Onix',
              precio: 25000,
              cantidad: 10,
              lugarBod: 'bodega 2 - celda 1',
              modelo: 'LTZ 2023',
              oriProd: 'Brazil',
              img: 'https://production.autoforce.com/uploads/version/profile_image/7536/model_main_webp_comprar-1-0-mt-pacote-r7a-rgd_9601d0912e.png.webp'
            },
            {
              id: 234,
              fabricante: 'Mazda',
              nombre: 'CX 30',
              precio: 35000,
              cantidad: 5,
              lugarBod: 'bodega 2 - celda 2',
              modelo: '3 2023',
              oriProd: 'Japon',
              img: 'https://autolab.com.co/wp-content/uploads/2022/06/ygft.png'
            },
            {
              id: 678,
              fabricante: 'Renault',
              nombre: 'Captur',
              precio: 19000,
              cantidad: 2,
              lugarBod: 'bodega 2 - celda 4',
              modelo: '2023',
              oriProd: 'Brazil',
              img: 'https://3.bp.blogspot.com/-mUTHoFP7xRk/WmXjzvBkGOI/AAAAAAAAWgk/LvxtUT0NX1Ecyl4YmXJjE9FupvVB_V__wCLcBGAs/s1600/Renault-Captur-%25282%2529.jpg'
            },
            {
              id: 890,
              fabricante: 'Volvo',
              nombre: 'CX 60',
              precio: 42000,
              cantidad: 3,
              lugarBod: 'bodega 2 - celda 9',
              modelo: 'lx 2023',
              oriProd: 'Japon',
              img: 'https://cars.usnews.com/static/images/Auto/izmo/i159615246/2023_volvo_xc60_angularfront.jpg'
            },
            {
              id: 9867,
              fabricante: 'Nissan',
              nombre: 'Versa',
              precio: 25000,
              cantidad: 8,
              lugarBod: 'bodega 2 - celda 10',
              modelo: '2023',
              oriProd: 'Japon',
              img: 'https://www.pompeyo.cl/wp-content/uploads/2021/01/blanco2.jpg'
            },
            {
              id: 7987,
              fabricante: 'Ford',
              nombre: 'EDGE',
              precio: 45000,
              cantidad: 1,
              lugarBod: 'bodega 2 - celda 9',
              modelo: '2023',
              oriProd: 'EEUU',
              img: 'https://clickandcars.com/wp-content/uploads/2023/02/19f83c39428726862e75c373e3538141-2-1024x768.jpg'
            },
            {
              id: 8768,
              fabricante: 'Suzuki',
              nombre: 'Swift',
              precio: 25000,
              cantidad: 2,
              lugarBod: 'bodega 2 - celda 10',
              modelo: '2023',
              oriProd: 'Japon',
              img: 'https://www.megautos.com/wp-content/uploads/2018/06/Suzuki-Swift-2018-trasera-blanco-1024x669.jpg'
            },
            {
              id: 123564,
              fabricante: 'BMW',
              nombre: 'M2',
              precio: 55000,
              cantidad: 1,
              lugarBod: 'bodega 2 - celda 34',
              modelo: '2023',
              oriProd: 'Almania',
              img: 'https://bmwco.vteximg.com.br/arquivos/ids/159267-1440-810/BMW-image-21EE-300-KHCX-main-1438.jpg?v=638095152203900000'
            },
            // {
            //   id: 83932874,
            //   fabricante: 'Chevrolet',
            //   nombre: 'Onix',
            //   precio: 25000,
            //   cantidad: 10,
            //   lugarBod: 'bodega 2 - celda 1',
            //   modelo: 'LTZ 2023',
            //   oriProd: 'Brazil',
            //   img: 'https://rodaticarros.com.co/images/listings/2023-01/81d80f9d-1673090903-845.jpg'
            // },
            // {
            //   id: 9273645,
            //   fabricante: 'Mazda',
            //   nombre: 'CX 30',
            //   precio: 35000,
            //   cantidad: 5,
            //   lugarBod: 'bodega 2 - celda 2',
            //   modelo: '3 2023',
            //   oriProd: 'Japon',
            //   img: 'https://rodaticarros.com.co/images/listings/2023-01/81d80f9d-1673090903-845.jpg'
            // }
          ]
        },
        {
          categoria: 'Tecnologia',
          data: [
            {
              id: 345,
              nombre: 'Airpods pro',
              fabricante: 'Apple',
              precio: 300,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 2',
              modelo: '2nd generacion',
              oriProd: 'EEUU',
              img: 'https://hips.hearstapps.com/hmg-prod/images/airpods-pro-2022-1663797595.jpg?crop=0.5xw:1xh;center,top&resize=1200:*'
            },
            {
              id: 74384039480,
              nombre: 'Galaxy',
              fabricante: 'Samsung',
              precio: 100,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 4',
              modelo: 'Buds 2',
              oriProd: 'EEUU',
              img: 'https://falabella.scene7.com/is/image/FalabellaCO/29769795_1?wid=800&hei=800&qlt=70'
            },
            {
              id: 9746578,
              nombre: 'Galaxy',
              fabricante: 'Samsung',
              precio: 720,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 4',
              modelo: 'S23 ultra',
              oriProd: 'Japon',
              img: 'https://http2.mlstatic.com/D_NQ_NP_846004-MLA53452158229_012023-O.jpg'
            },
            {
              id: 857383,
              nombre: 'Iphone',
              fabricante: 'Apple',
              precio: 900,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 4',
              modelo: '14 Pro max',
              oriProd: 'EEUU',
              img: 'https://exitocol.vtexassets.com/arquivos/ids/15562771/celular-iphone-14-pro-max-128gb-5g-morado.jpg?v=638043813619900000'
            },
            {
              id: 785478,
              nombre: 'Bose soundlink',
              fabricante: 'Bose',
              precio: 450,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 4',
              modelo: 'Plus serie 2',
              oriProd: 'EEUU',
              img: 'https://mundomac.com.ec/wp-content/uploads/2021/11/Bose-revolve-plus-negro.jpg'
            },
            {
              id: 987897,
              nombre: 'SmartTv 50´',
              fabricante: 'Samsung',
              precio: 849.99,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 4',
              modelo: 'Crystal UHD 4k',
              oriProd: 'JAPON',
              img: 'https://falabella.scene7.com/is/image/FalabellaCO/30579199_7?wid=800&hei=800&qlt=70'
            },
          ]
        },
        {
          categoria: 'Libros',
          data: [
            {
              id: 404573956,
              fabricante: 'Margaret Mitchell',
              nombre: 'Lo que el viendo se llevo',
              precio: 300,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 8',
              modelo: '',
              oriProd: 'EEUU',
              img: 'https://www.milcomics.com/1299115-thickbox_default/lo-que-el-viento-se-llevo.jpg'
            },
            {
              id: 582904,
              fabricante: 'Mark E. Sheldon',
              nombre: 'He died for us',
              precio: 40,
              cantidad: 20,
              lugarBod: 'bodega 4-stand 8',
              modelo: '',
              oriProd: 'EEUU',
              img: 'https://images-platform.99static.com//qHYA8lW_XJXJY8Ogz7nQtBhbVZU=/0x0:1648x1648/fit-in/500x500/99designs-contests-attachments/94/94002/attachment_94002912'
            },
            {
              id: 93857,
              fabricante: 'R.W. Hamilton III',
              nombre: 'God´s word to us',
              precio: 35.8,
              cantidad: 12,
              lugarBod: 'bodega 1-stand 8',
              modelo: '',
              oriProd: 'EEUU',
              img: 'https://images-platform.99static.com/X6abuwQM-0-MXPF9Lf20RjBYQDk=/0x0:2040x2040/500x500/top/smart/99designs-contests-attachments/86/86105/attachment_86105045'
            },
            {
              id: 840285,
              fabricante: 'G Milton Smith',
              nombre: 'Knowing god in his word',
              precio: 25,
              cantidad: 8,
              lugarBod: 'bodega 1-stand 8',
              modelo: '',
              oriProd: 'EEUU',
              img: 'https://images-platform.99static.com/_tUw-EHBCoP794Nrbh7OaH51vTs=/0x0:1900x1900/500x500/top/smart/99designs-contests-attachments/90/90129/attachment_90129407'
            },
            {
              id: 103958,
              fabricante: 'Homero',
              nombre: 'Iliada',
              precio: 22,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 8',
              modelo: '',
              oriProd: 'ESPAÑA',
              img: 'https://www.tornamesa.co/imagenes/9788418/978841800896.GIF'
            },
            {
              id: 9876,
              fabricante: 'Robert fisher',
              nombre: 'El caballero de la armadura oxidada',
              precio: 5,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 8',
              modelo: '',
              oriProd: 'Colombia',
              img: 'https://www.elmundoempresarial.es/noticias/images/cms-image-000015124.jpg'
            },
            {
              id: 45456,
              fabricante: 'J.K Rowling',
              nombre: 'Animales fantasticos',
              precio: 24.9,
              cantidad: 10,
              lugarBod: 'bodega 1-stand 8',
              modelo: '',
              oriProd: 'Colombia',
              img: 'https://m1.paperblog.com/i/469/4695813/top-ten-portadas-mas-bonitas-libros-leidos-L-PjOPFm.jpeg'

            }
          ]
        },
        {
          categoria: 'Ropa',
          data: [
            {
              id: 1231232,
              nombre: 'Camiseta gris oscura',
              fabricante: 'Gef',
              precio: 15.99,
              cantidad: 25,
              lugarBod: 'bodega 6-stand 1',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://www.carlosnieto.com.co/wp-content/uploads/CAMISETA-GRIS-MEDIO-MELANGE-0019583-600x600.png'
            },
            {
              id: 9585768,
              nombre: 'Camiseta blanca',
              fabricante: 'Monastery',
              precio: 80,
              cantidad: 15,
              lugarBod: 'bodega 6-stand 1',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://cdn.shopify.com/s/files/1/0305/2584/9736/products/CORRECTA1_7c34d67a-a264-4694-8901-57a7409d45e3_600x.png?v=1672254536'
            },
            {
              id: 75847934,
              nombre: 'Camiseta azul',
              fabricante: 'the North face',
              precio: 65,
              cantidad: 15,
              lugarBod: 'bodega 6-stand 1',
              modelo: '',
              oriProd: 'EEUU',
              img: 'https://www.creacionescasbas.com/27568-thickbox_default/camiseta-the-north-face-easy-tnf-black.jpg'
            },
            {
              id: 8695884934,
              nombre: 'Camiseta roja',
              fabricante: 'Addidas',
              precio: 78,
              cantidad: 18,
              lugarBod: 'bodega 6-stand 1',
              modelo: '',
              oriProd: 'EEUU',
              img: 'https://www.gravitysurfshop.com/wp-content/uploads/2016/05/P06320-CAMISETA-ADIDAS-1.jpg'
            },
            {
              id: 8694827593958,
              nombre: 'Camiseta blanca estampado',
              fabricante: 'Monastery',
              precio: 70,
              cantidad: 22,
              lugarBod: 'bodega 6-stand 1',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://www.hangarmas.com/imgs/11299960/1000704242/c/150_WHITE_1.png'
            },
          ]
        },
        {
          categoria: 'Cosmeticos',
          data: [
            {
              id: 840583409530,
              nombre: 'Labial con ácido de hialurónico',
              fabricante: 'Ana maría',
              precio: 3,
              cantidad: 25,
              lugarBod: 'bodega 6-stand 4',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://cosmeticosanamaria.com/wp-content/uploads/2021/08/105656.jpg'
            },
            {
              id: 958684739,
              nombre: 'Serum facial',
              fabricante: 'Holy',
              precio: 10,
              cantidad: 33,
              lugarBod: 'bodega 6-stand 9',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://www.holycosmetics.com.co/wp-content/uploads/2022/11/Serum-de-niacinamida-by-holy-cosmetics-web-Holy-cosmetics.jpg'
            },
          ]
        },
        {
          categoria: 'Hogar',
          data: [
            {
              id: 58949,
              nombre: 'Mesa plastica',
              fabricante: 'Colplast',
              precio: 24.99,
              cantidad: 5,
              lugarBod: 'bodega 8-stand 10',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://www.colplast.com.co/wp-content/uploads/2020/06/mesa-celebrity.png'
            },
            {
              id: 94850394838,
              nombre: 'Cortinas de doble capa',
              fabricante: 'Pony dance',
              precio: 100,
              cantidad: 5,
              lugarBod: 'bodega 8-stand 10',
              modelo: '',
              oriProd: 'COLOMBIA',
              img: 'https://m.media-amazon.com/images/I/71zRP9NBfkL.jpg'
            },
            {
              id: 9435984039584,
              nombre: 'Sofa venethon',
              fabricante: 'Muebles y accesorios',
              precio: 520.89,
              cantidad: 5,
              lugarBod: 'bodega 8-stand 24',
              modelo: '3 puestos',
              oriProd: 'COLOMBIA',
              img: 'https://cdn.shopify.com/s/files/1/0459/6937/5384/products/sofa-venethon-3p-cosmic-negro-mueblesyaccesorios_4_800x.jpg?v=1663613324'
            },
          ]
        }
      ]
    }
    return { data };
  }
}
