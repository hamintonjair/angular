export class PersonaModel{

   id?: number;
   Nombres:  string
   Apellidos: string
   Identificacion: number
   Telefono: number
   Email: string
   Direccion: string
   FechaNacimiento: Date
   Socio: string
   // nivelEstudios: number

   constructor(Nombre: string, Apellidos: string, Identificacion: number, Telefono: number, Email: string, Direccion: string, FechaNacimiento: Date, Socio: string){
      
      this.Nombres = Nombre;
      this.Apellidos=  Apellidos;
      this.Identificacion = Identificacion;
      this.Telefono = Telefono;
      this.Email = Email;
      this.Direccion = Direccion;
      this.FechaNacimiento = FechaNacimiento;
      this.Socio = Socio;
      // this.nivelEstudios = nivelEstudios;

   }

}