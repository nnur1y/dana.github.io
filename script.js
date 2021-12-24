$('#btn_click').on('click', function(){
    window.location.href = $(this).attr('url')
}
);

function style(){
    document.getElementById("btn_click").style.color = 'red';
}

function myFunction(){
    document.getElementById("shadow").style.boxShadow = "10px 20px 30px lightblue";
}

$('#insta').on('click', function(){
    window.location.href = $(this).attr('url')
}
);

$('#btn_click').on('click', function(){
    document.getElementById("shadow").style.boxShadow = '0 0 10px rgba(0, 0, 0, 0, 5)';
}
);
