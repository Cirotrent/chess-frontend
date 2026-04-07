import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 403) {
        alert("Utente non autorizzato");
        // oppure redirect
        //this.router.navigate(['/unauthorized']);
      }

      return throwError(() => error);
    })
  );
};