flex.varCss.__NavBarCss = `

  @font-face  {
    font-family: roboto;
    src: url('js_portal/css/Roboto-Regular.ttf');
  }

  html{
    font-family: roboto;
  }

  .NavBar_css0{
    display: block;
    position: fixed;
    --backgroundScroll: #AF7AC5 ;
    --backgroundInitial: #AF7AC5 ;
    --fontColorScroll: #000000;
    --fontColorInitial: #000000;
    --fontColorOver: #2bab8e;
    color: var(--fontColorInitial);
    background-color: #C39BD3 ;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    font-size: 20px;
    transition-property: color, background-color;
    transition: ease-in 0.2s;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .NavBarButtonLink_css0{
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: 40px;
    font-size: 14px;
    font-weight: 200;
    text-decoration: none;
    color: var(--fontColorInitial);
    background-color: #D2B4DE;
    border-radius: 8px;
    color: white;
    padding: 5px 10px;
  }
  .NavBarButtonLink_css0:hover{
    background-color: #5B2C6F;
  }
  
  .NavBarButtonLink_css0 .ControlButton_css0{
    display:none;
  }

  .NavBarButtonLink_css0[active = "true"]{
    color:  var(--fontColorScroll);
  }

  .NavBarButtonLink_css0[active = "true"] .ControlButton_css0 > svg *{
    fill: var(--fontColorScroll);
  }

  .NavBarButtonLink_css0 .ControlButton_css0 > svg *{
    fill: var(--fontColorInitial);
  }

  .NavBarButtonLink_css0:not(.NavBarButtonLink_css0:last-of-type){
    background-color: #279b81;
  } 

  .NavBarUpSide_css0{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .NavBarDownSide_css0{
    position: relative;
    height: 70px;
    padding: 2px 0 2px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .NavBarLogoLink_css0{
    float: left;
    padding-left: 25px;
  }

  .NavBarLogoLink_css0,
  .NavBarImageLogo_css0{
    height: inherit;
  }

  .NavBarContactSection_css0{
    display: none;
  }

  .NavBarContactElement_css0{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }


  .NavBarLinksContainer_css0[active = "true"]{
    left: 0;
    z-index: 100;
  }

  .NavBarLink_css0{
    color: white;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    padding: 10px 5px;
    margin: 0;
    border-bottom: 1px solid #dfe4e4;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    cursor: pointer;
  }

  .NavBarLink_css0:first-of-type{
    border-top: 1px solid #dfe4e4;
  }

  .NavBarLink_css0:hover,
  .NavBarLink_css0[active = true]{
    color: #5B2C6F;
  }

  .NavBarHamburguer_css0{
    position: relative;
    top: calc(50% - 20px);
    box-sizing: border-box;
    margin-right: 25px;
    display: inline-flex;
    float: right; 
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .NavBarLink_css0:hover > div.ControlButton_css0 > svg *,
  .NavBarLink_css0[active = true] > div.ControlButton_css0 > svg *{
    fill: #FFFFFF
  }

  .NavBarBar1_css0,
  .NavBarBar2_css0,
  .NavBarBar3_css0 {
    width: 90%;
    height: 7px;
    background-color: rgb(250, 246, 246);
    transition: transform ease 0.2s;
    border: solid 2px rgba(0,0,0,0.35);
    border-radius: 3px;
  }

  .NavBarHamburguer_css0[active = "true"] > .NavBarBar1_css0{
    transform: rotate(-45deg) translate(-9px, 11px);
  }

  .NavBarHamburguer_css0[active = "true"] > .NavBarBar2_css0{
    opacity: 0;
  }

  .NavBarHamburguer_css0[active = "true"] > .NavBarBar3_css0{
    transform: rotate(45deg) translate(-10px, -10px);
  }

  @media screen and (min-width: 460px){

    .NavBarButtonLink_css0{
      margin-right: 20px;
      font-size: inherit;
    }

    .NavBarButtonLink_css0 .ControlButton_css0{
      display:block;
      width: 25px;
      height: 25px;
    }
  }

  @media screen and (min-width: 1000px) {

    .NavBar_css0{
      font-size: 18px;
    }

    .NavBarUpSide_css0{
      flex-direction: column;
      align-items: center;
    }

    .NavBarLink_css0{
      float: left;
      width: auto;
      border: none;
      line-height: 45px;
    }

    .NavBarLink_css0:first-of-type{
      border-top: none;
    }

    .NavBarContactSection_css0{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-self: flex-end;
      padding: 10px 0;
    }

    .NavBarLinksContainer_css0{
      width: auto;
      display: block;
      position: static;
      background-color: inherit;
      float: left;
      margin-left: 4%;
      height: auto;
    }

    .NavBarDownSide_css0 .NavBarLinksContainer_css0 .NavBarLink_css0 + .NavBarLink_css0{
      margin-left: 25px;
    }

    .NavBarHamburguer_css0{
      display: none;
    }

    @media screen and (min-width:1299px){

      .NavBarLinksContainer_css0{
        margin-left: 80px;
      }

      .NavBarDownSide_css0 .NavBarLinksContainer_css0 .NavBarLink_css0 + .NavBarLink_css0{
        margin-left: 40px;
      }
    }

  }

`;