$.ajax({
    methods: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{
        query:"미움받을 용기"
    },
    headers:{
        Authorization: "KakaoAK 6a45385c4aeffd76a1b4869e298cd664"    }
})
    .done(function(msg){
        console.log(msg)
        console.log(msg.documents[0].title)
        console.log(msg.documents[0].thumbnail)
        $("P").append(msg.documents[0].title)
        $("P").append("<img src='"+msg.documents[0].thumbnail+"'</string>")
});

// fetch('https://dapi.kakao.com/v3/search/book?target=title')
//   .then(res => {
//     // response 처리
//     console.log(res);
//     // 응답을 JSON 형태로 파싱
//     return res.json();
//   })
//   .then(data => {
//     // json 출력
//     console.log(data)
//   })
//   .catch(err => {
//     // error 처리
//     console.log('Fetch Error', err);
//   });


// const url ="https://dapi.kakao.com/v3/search/book?target=title"

//   let response = fetch(url, {
//     method: 'GET',
//     data:{
//         query:"미움받을 용기"
//     },
//     headers: {
//         // Authentication: 'secret',
//         Authentication: "KakaoAK 6a45385c4aeffd76a1b4869e298cd664",
//     },
//   });
//      response.then(res => {
//     console.log('1',res)
// })


