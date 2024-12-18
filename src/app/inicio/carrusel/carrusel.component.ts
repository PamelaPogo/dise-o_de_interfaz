import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent {
  // Lista de productos
  products = [
    {
      name: 'modelo 1',
      price: 999,
      inventoryStatus: 'In Stock',
      image:
        'https://seovalladolid.es/wp-content/uploads/2023/12/ias-para-hacer-imagenes.png',
    },
    {
      name: 'modelo 2',
      price: 999,
      inventoryStatus: 'Out of Stock',
      image:
        'https://static.vecteezy.com/system/resources/previews/023/192/562/non_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg',
    },
    {
      name: 'modelo 3',
      price: 999,
      inventoryStatus: 'In Stock',
      image:
        'https://keepcoding.io/wp-content/uploads/2022/09/DALL%C2%B7E-2024-07-19-12.22.40-A-futuristic-art-studio-where-5-AI-tools-for-drawing-and-image-creation-are-prominently-displayed.-The-tools-include-a-holographic-projector-for-virtu-1024x585.png',
    },
    {
      name: 'modelo 4 ',
      price: 999,
      inventoryStatus: 'In Stock',
      image:
        'https://i.blogs.es/ceda9c/dalle/450_1000.jpg',
    },
    {
      name: 'modelo 5',
      price: 999,
      inventoryStatus: 'In Stock',
      image:
        'https://img.freepik.com/foto-gratis/ilustracion-fondo-abstracto-formas-diseno-multicolor-generadas-ia_188544-15582.jpg',
    },
    {
      name: 'modelo 6',
      price: 999,
      inventoryStatus: 'In Stock',
      image:
        'https://chat-gpt-mexico.mx/wp-content/uploads/2024/01/Creacion-de-imagenes-de-arte-generadas-por-IA.jpg',
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3, 
      numScroll: 1,
    },
    {
      breakpoint: '980px',
      numVisible: 2, 
      numScroll: 1,
    },
    {
      breakpoint: '660px',
      numVisible: 1, 
      numScroll: 1,
    },
  ];


  getSeverity(
    status: string
  ): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}