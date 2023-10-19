import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa el modulo HttpClient para realizar solicitudes HTTP
import { DatePipe } from '@angular/common'; // Importa el servicio DatePipe para formatear fechas

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  username: string = ''; 
  firstRepo: any = null; 
  searched: boolean = false;
  userNotFound: boolean = false;

  // Constructor del componente, inyecta el servicio HttpClient y el servicio DatePipe
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  search(): void {
    // Método para realizar la búsqueda de un usuario de GitHub, aqui ponemos 8080 lo mismo que springboot
    this.http
      .get<any>(
        `http://localhost:8080/api/github-repo?username=${this.username}`
      )
      .subscribe(
        // Funcion de callback para manejar la respuesta exitosa de la solicitud HTTP
        (data) => {
          // Se marca que se ha realizado una busqueda
          this.searched = true;

          if (data.created_at) {
            // Si se encuentra una fecha de creacion en la respuesta
            const formattedDate = this.formatDate(data.created_at);
            this.firstRepo = {
              name: data.name,
              created_at: formattedDate,
            };
          } else {
            // Si no se encuentra la fecha de creacion
            this.firstRepo = null;
            // Se marca que el usuario no fue encontrado
            this.userNotFound = true;
          }
        },
        (error) => {
          // Funcion de callback para manejar errores en la solicitud HTTP
          console.error('Error al realizar la solicitud: ', error);
          this.firstRepo = null;
          // Se marca que el usuario no fue encontrado debido a un error
          this.userNotFound = true;
        }
      );
  }

  // Metodo para formatear una cadena de fecha en un objeto Date
  formatDate(dateString: string | null): Date {
    if (dateString) {
      // Verifica si la cadena de fecha no es nula o vacia
      const date = new Date(dateString);
      // Verifica si la fecha es valida
      if (!isNaN(date.getTime())) {
        // Devuelve la fecha formateada
        return date;
      }
    }
    return new Date();
  }
}
