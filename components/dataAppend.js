async function getData(name , locationAppend){

    let key = "AIzaSyBVR3igfcEoHRzfgtrau83fRkeOKUayGQk";

    let api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${name}&type=video&key=${key}`;

    let res = await fetch(api);

    let data = await res.json();
    let arr = data.items;
    console.log(arr);

    appendViedos(arr, locationAppend)
}



const appendViedos = (items, locationAppend)=>{
    locationAppend.innerHTML = null;

  items.forEach(({snippet, id : {videoId}}) =>{
     // console.log(snippet);
    //   console.log(videoId);
    //   console.log(snippet.thumbnails.medium.url);
    //   console.log(snippet.title);

    // let data_send ={
    //     vid: videoId,
    //     nav: snippet.title,
    // }

    let div = document.createElement("div");
//   div.onclick = function(){
//      showVid(data_send);
//   }

    let img = document.createElement("img");
    img.src = snippet.thumbnails.medium.url ;
    img.width='290';
    img.height = 200;

    let name = document.createElement("p");
    name.innerText= snippet.title;

    let channelName = document.createElement("p");
    channelName.innerText = snippet.channelTitle;

    div.append(img,name,channelName);
    locationAppend.append(div);
  })
}

export { getData}