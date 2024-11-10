
interface Navitems{
    title:string,
    link:string
}


interface Icon {
  src: string;
  alt: string;
  width: number;
  height: number;
}



export const navItems:Navitems[] =[
{
  title:"Home",
  link:"/"
},
{
  title:"Shop",
  link:"/shop"
},
{
  title:"About",
  link:"/about"
},
{
  title:"Contact",
  link:"/contact"
},


];

export const iconsList:Icon[]=[

  { src:"/user.png", alt:"user", width:24, height:24 },
  { src: "/searchicon.png", alt: "searchicon", width: 24, height: 24 },
  { src: "/heart.png", alt: "wishlist", width: 23.33, height: 20.81 },
  { src: "/cart.png", alt: "cart", width: 24.53, height: 22.06 }

]