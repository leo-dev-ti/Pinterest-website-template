// I dont have any image rights, this is only for studies

const images = [
    {
        "tag" : "animals",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm_9bqBTxKS8MlGEa_WscQtm8DsbkcdM5Cg&s"
    },
    {
        "tag" : "food",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQzQqVBk7LmMbMSaEuRy3AkVv1lyGqThm4Q&s"
    },
    {
        "tag" : "tech",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROkEBiMyWt65P2_ElsKpo4i5G-MM3YUujCg&s"
    },
    {
        "tag" : "life",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGIvSalvgxO-R4f2ITaAeN5mJQJqfP2ODYg&s"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN44mkltspr6vZqOKopDoTXFIPn6N7xWGVuA&s"
    },
    {
        "tag" : "animals",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJGybdNX3nIRV7Cf9mKCv5dgR9YG-A6YKnw&s"
    },
    {
        "tag" : "tech",
        "src" : "https://imageio.forbes.com/specials-images/dam/imageserve/930116744/960x0.jpg?height=473&width=711&fit=bounds"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtfoMRBIbztGVc6RJ8_ld3YbcINKogb29Yg&s"
    },
    {
        "tag" : "life",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06TiLODN1U3RU5M_83z6dp8T6AftUuXt_FQ&s"
    },
    {
        "tag" : "tech",
        "src" : "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fe727080fd6054-Como-escolher-a-linguagem-de-programacao-certa-para-um-novo.jpg"
    },
    {
        "tag" : "animals",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwe1Ffibi3dUwW6W5sRixtz-v4l4Dk4Ru_7A&s"
    },
    {
        "tag" : "food",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxYUb82L3RX5dgbZ_sPnFJGziaA3O3nqMQw&s"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdoFm73SZG49BB7oC66qZAtCaQaetGd_HYg&s"
    },
    {
        "tag" : "tech",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwBwh5U4kFsuQc7CHtGRrSxj_GKQPD4TLJw&s"
    },
    {
        "tag" : "life",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaDoK7Kzqe-bI3nuYIb6TQuWuPzAk9w5HgQ&s"
    },
    {
        "tag" : "animals",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWJcQ5n75b6hxFPEGUxCk4kgSvuRnBJlz0A&s"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSwu7yF26FDy2NAizH1F0CgH7PukKfBIhBw&s"
    },
    {
        "tag" : "food",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsK_bkamfTLOnw5UiJfOJ2duHki4fRPLDyA&s"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46Al-Wuc3TpWHPKPVY45PJztskl5TDxa1gw&s"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD63RI7ILYBEPWM4QD-8z2QaKqpc5KoFAZQA&s"
    },
    {
        "tag" : "fashion",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCCBs5pXwSGzXneojN-uyzt-4TxH_i6yYpQ&s"
    },
    {
        "tag" : "life",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06TiLODN1U3RU5M_83z6dp8T6AftUuXt_FQ&s"
    },
    {
        "tag" : "animals",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwe1Ffibi3dUwW6W5sRixtz-v4l4Dk4Ru_7A&s"
    },
    {
        "tag" : "food",
        "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLT3hnZnYWKlnaZSSttAycylLlT9IreMja1A&s"
    }
];


for(let x in images)
{
    var img = document.createElement("img");
    img.src = images[x].src;
    img.id = images[x].tag;

    document.querySelector("main").appendChild(img);
}

const buttons = document.querySelectorAll("header ul li");
const img_elements = document.querySelectorAll("main img");
for(let x in buttons)
{
    if(buttons[x].addEventListener) buttons[x].addEventListener("click", (e)=>{
        for(let a in img_elements)
        {
            if(img_elements[a].id == buttons[x].innerText.toLowerCase())
            {
                if(img_elements[a].style) img_elements[a].style.opacity = "1";
            }else
            {
                if(img_elements[a].style) img_elements[a].style.opacity = "0.2";
            }
        }
    });
}
