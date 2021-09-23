// eslint-disable-next-line @typescript-eslint/quotes
import { Estilo } from "./Estilo";
// eslint-disable-next-line @typescript-eslint/quotes
import { ListaJuegos } from "./ListaJuegos";

export class DatosJuegos{
  public estilo: Estilo = new Estilo(0, '');
  public listajuegos: ListaJuegos = new ListaJuegos(0,'');

}
