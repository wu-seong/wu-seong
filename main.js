/* 
-실시간으로 마우스 좌표에 따라 좌표값 출력 (client == page);  =>DOMrect의 좌표값이 아닌 css 값 수정
이벤트 리스너로 click 이벤트 받고 => mousemove 이벤트 (그외 over out /down up )
e객체의 좌표로 position조작 => 요소 크기에 따라 정확한 위치를 위해 미세하게 조정필요
-실시간으로 마우스 좌표에 따라 조준 이미지 화면에 출력 => img 태그 사용, position:absolute left top 사용 
-이미지 정중앙 기준으로 가로세로선 출력: border 이용 크기(width, height)와 위치 사용(left top)
*/ 
const $ = (seletor) => document.querySelector(seletor);

function showTarget(e, x, y){
    $(".target").style.top =` ${y-60}px`;
    $(".target").style.left =` ${x-60}px`;
}
function showCoordinates(e, x, y){
    $(".coordinate").innerHTML = `x:${ x }px y:${ y }px`
    $(".coordinate").style.top =` ${ y + 30 }px`;
    $(".coordinate").style.left =` ${ x + 30 }px`;
}
function showLine(e, x, y){
    $(".row").style.height =`${y}px`;
    $(".column").style.width =`${x}px`;
}
$("body").addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    showTarget(e, x, y);
    showCoordinates(e, x, y);   
    showLine(e, x, y);
})
