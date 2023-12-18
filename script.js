const mainContainer=document.querySelector(".main-container");
const SelectFontSize=document.querySelector("#SelectFontSize");
const SelectBgColor=document.querySelector("#SelectBgColor");
const paraTag=document.querySelector("#para");
const Reset=document.querySelector("#reset");

SelectBgColor.addEventListener("change",(e)=>{
    let Color=e.target.value;
    console.log(Color);
    console.log(SelectBgColor.value);
    paraTag.style.backgroundColor=Color;

    localStorage.setItem("Color",Color);
});
SelectFontSize.addEventListener("change",(e)=>{
    let Font=e.target.value;
    paraTag.style.fontSize=Font;

    localStorage.setItem("Font",Font);
});

const setInitials=()=>{
    const getColor= localStorage.getItem("Color");
    const getFont= localStorage.getItem("Font");
     
    if(getColor && getFont){
        SelectBgColor.value=getColor;
        SelectFontSize.value=getFont;
        paraTag.style.backgroundColor=getColor;
        paraTag.style.fontSize=getFont;

    }
    if(!getColor && !getFont){
        SelectBgColor.value="tomato";
        SelectFontSize.value="16px";
        paraTag.style.backgroundColor="tomato";
        paraTag.style.fontSize="16px";
    }
    if(!getColor && getFont){
        SelectBgColor.value="tomato";
        SelectFontSize.value=getFont;
        paraTag.style.backgroundColor="tomato";
        paraTag.style.fontSize=getFont;

    }
    if(getColor && !getFont){
        SelectBgColor.value=getColor;
        SelectFontSize.value="16px";
        paraTag.style.backgroundColor=getColor;
        paraTag.style.fontSize="16px";

    }
}

Reset.addEventListener("click",()=>{
  localStorage.removeItem("Color");
  localStorage.removeItem("Font");

  SelectBgColor.value="tomato";
  SelectFontSize.value="16px"
  paraTag.style.backgroundColor="tomato";
  paraTag.style.fontSize="16px";


})
setInitials();