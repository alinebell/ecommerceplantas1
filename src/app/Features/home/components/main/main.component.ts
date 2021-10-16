import { Component, OnInit } from '@angular/core';
import { produtos } from '../../models/produto.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  /*menu = 'este é o conteúdo principal';
  numero = 10;
  ativo = true;
  numeroComDecimais = 12.5;*/

  title = "Lista de Produtos";

  produtos : Array<produtos> = [
    { nome: 'Cacto amendoim', tamanho: 'pote 10', preco: 10, img: 'https://suculentaslove.com/wp-content/uploads/2021/02/58079950_2189039811203877_3864330069410794346_n.jpg'},
    { nome: 'Cacto bola', tamanho: 'pote 13' , preco: 15, img:'https://i.pinimg.com/originals/bc/dd/d6/bcddd6b41d6cc78e36be31d36de31188.jpg'},
    { nome: 'Coroa de Frade', tamanho: 'pote 30', preco: 55, img:'https://cdn.awsli.com.br/600x450/1191/1191464/produto/46517033/6864b78f96.jpg'},
    { nome: 'Echinopsis Lua', tamanho: 'pote 10', preco: 12, img:'https://1.bp.blogspot.com/_qOCKRq0R3ig/SQ77Im7WZ8I/AAAAAAAAAzk/VQHsFBWqghY/s400/Echinopsis+subdenudata+1.jpg'},
    { nome: 'Euphorbia Obesa', tamanho: 'pote 13', preco: 25, img:'https://reinoplantae.com/2087-large_default/euphorbia-obesa.jpg'},
    { nome: 'Mandacaru', tamanho: 'pote 30', preco: 30, img:'https://static.cloud-boxloja.com/lojas/9s0e9/produtos/46a693f3-7299-408e-b606-2d5f22e53f5a.jpg'},
    { nome: 'Palma', tamanho: 'pote 30', preco: 35, img:'https://static.cloud-boxloja.com/lojas/9s0e9/produtos/fb807080-a15d-4d5d-a099-402393b3a582.jpg'},
    { nome: 'Poltrona de sogra', tamanho: 'pote 10' , preco: 30, img:'https://a-static.mlcdn.com.br/1500x1500/planta-cacto-echinocactus-grusonii-bola-barril-para-vaso-16-03-cactos-pg/cactospontagrossa/9p/8680eac3bc2a1c3da13cf30f30fafafd.jpg'},
    { nome: 'Cacto opuntia', tamanho: 'pote 9' , preco: 12, img:'https://1.bp.blogspot.com/-OBKl0uPA-B8/W00AH_7DhzI/AAAAAAAAIr0/MC3gYNexlgc79czdkZfw82pyCC5ZB2BBACLcBGAs/w1200-h630-p-k-no-nu/opuntia_monacantha_02.jpg'}];
  
  produtosListaSuculentas : Array<produtos> = [
    { nome: 'Suculenta Lola', tamanho: 'pote 12', preco: 25, img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/048/264/products/echeveria-lola-31-4c7fafa93fcd0ae6ee16293256471499-640-0.jpg'},
    { nome: 'Sedum Burrito',         tamanho: 'pote 10', preco: 10, img: 'https://cdn.awsli.com.br/600x450/974/974709/produto/36479412/e53e5808a0.jpg'},
    { nome: 'Echeveria azul',        tamanho: 'pote 13', preco: 15, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/048/264/products/echeveria-azul-246c47c5bb20004dca16305290922261-640-0.jpg'},
    { nome: 'Echeveria Topsy Turvy', tamanho: 'pote 15', preco: 20, img: 'https://cdn.awsli.com.br/600x450/1745/1745998/produto/96066940/b66d2b654b.jpg'},
    { nome: 'Graptoveria Fred Yves',   tamanho: 'pote 8',  preco: 10, img: 'https://guiadassuculentas.com/wp-content/uploads/2021/01/Graptoveria-Fred-Ives-Um-Guia-Desta-Suculenta.jpg'},
    { nome: 'Graptopetalum Paraguayense',     tamanho: 'pote 8',  preco: 10, img: 'https://cdn.awsli.com.br/600x450/1602/1602085/produto/71132543/0fe3d3faf7.jpg'},
    { nome: 'Sedum Bronze',          tamanho: 'pote 8',  preco: 10, img: 'https://58438.cdn.simplo7.net/static/58438/sku/suculentas-graptosedum-bronze--p-1595357362290.jpg'},
    { nome: 'Sedum Rubroncticum',    tamanho: 'pote 8',  preco: 10, img: 'https://vivasuculentas.com/wp-content/uploads/2020/11/jelly_bean_2__52169.1561138321.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
    for (let produto of this.produtos){
      console.log(produto.nome, produto.preco)
    }
  }
addToCart(){
  alert('Produto adicionado ao carrinho com sucesso!');
}


}
