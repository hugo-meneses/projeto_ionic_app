import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedsPage {

  public lista_filmes = new Array <any>();
  public page = 1;

  public objeto_feed = {

        titulo: "Hugo leonardo",
        data: "November 5, 2018",
        descricao: "Aprender é sempre preciso. Teste de alteração de pagina feeds.",
        qtd_likes: 12,
        qtd_comments: 4,
        time_comments:"11h ago"
  }

	public nome_usuario: string = "Hugo Leonardo";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private moviProvider: MoovieProvider) {
  }

  public somaNumeros(): void{
	alert("Hugo Leonardo");
}

 ionViewDidLoad() {
   this.moviProvider.getLatestMovies().subscribe(
    data=>{
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
		  this.lista_filmes = objeto_retorno.results;
      console.log(objeto_retorno);
        
   },   error=>{
            console.log(error);
   }
  
    )
  }

}
