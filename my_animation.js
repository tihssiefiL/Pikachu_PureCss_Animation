(function () {
    let code = `

    #pikachu{
        width: 310px;
        height: 210px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)    
      }
    .nose{
      /* width: 22px;
      height: 10px; */
      border: 11px solid;
      border-radius: 11px;
      border-color: black transparent transparent transparent;
      border-width: 11px 12px;
      position: absolute;
      left: 50%;
      top: 30px;
      transform: translateX(-50%)
    }
    .e{
      background-color: #2e2e2e;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      position: absolute;
      top: 0px;
      border: 2px solid #000;
    }
    .le{
      left: 40px;
    
    }
    .re{
      right: 40px;
    
    }
    .e::before{
      content: '';
      display: block;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      left: 8px;
    }
    .face{
      width: 70px;
      height: 70px;
      position: absolute;
      top: 80px;
      background-color: #fc0d1c;
      border: 2px solid #000;
      border-radius: 50%;
    }
    .lface{
      left: 10px;
    }
    .rface{
      right: 10px;
    }
    .lips{
      border: 3px solid;
      position: absolute;
    }
    .ullip{
      width: 70px;
      height: 20px;
      left: 50%;
      top: 50px;
      transform: translateX(-100%) rotate(-15deg);
      border-bottom-left-radius: 30px 20px;
      border-top:none;
      border-right: none;
      z-index: 2;
      background-color: #fdb900;
    }
    .urlip{
      width: 70px;
      height: 20px;
      right: 50%;
      top: 50px;
      transform: translateX(100%) rotate(15deg);
      border-bottom-right-radius: 30px 20px;
      border-top:none;
      border-left: none;
      background-color: #fdb900;  
      z-index: 2;
    }
    .llip{
      width: 150px;
      height: 1000px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      border-radius: 90px/500px;
      background-color: #990513;
      border: 2px solid #000;
      overflow: hidden;
    }
    .hidden{
      /* border: 1px solid red; */
      width: 100%;
      height: 120px;
      position: absolute;
      top: 60px;
      overflow: hidden;
      z-index: 1;
    }
    .llip::after{
      content: ' ';
      display: block;
      width: 120px;
      height: 120px;
      background-color: #fc4a62;
      border-radius: 60px/50px;
      position: absolute;
      bottom:-35px;
      left: 50%;
      transform: translateX(-50%);
    }    
    `
    let codePreview = document.querySelector('#preview_code')
    let style = document.querySelector('#style')
    let n = 1
    let timer = setInterval(() =>{
      codePreview.innerHTML = code.substring(0,n)
      codePreview.scrollTop = codePreview.scrollHeight //translateY(-20px)
      style.innerHTML = code.substring(0,n)
      n = n +1
    },1)
})();