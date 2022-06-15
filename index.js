

function parseIMG() {
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
    console.log(file)
    console.log(URL.createObjectURL(file))
    OCR(URL.createObjectURL(file))
}

function OCR(url) {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "helloworld");

    var formdata = new FormData();
    formdata.append("language", "eng");
    formdata.append("isOverlayRequired", "false");
    formdata.append("url", url);
    formdata.append("iscreatesearchablepdf", "false");
    formdata.append("issearchablepdfhidetextlayer", "false");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://api.ocr.space/parse/image", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}