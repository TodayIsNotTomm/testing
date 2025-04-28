 function sendComment() {
     await fetch("https://shikimori.one/api/messages", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US,ru-RU;q=0.8,ru;q=0.5,en;q=0.3",
        "Sec-GPC": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-CSRF-Token": "tXIk5-TxYELni-dui4UbruWInTjorzB8dIfXlFRYKJjdA_oaGQIJ5GwgOHPqNhE05DQmbhuPPLg6MjYw5v218w",
        "X-Faye-Token": "d1ft8y759f34o25nw8qzpoqb27rnfjy",
        "X-Requested-With": "XMLHttpRequest",
        "Idempotency-Key": "\"886795090945233637\"",
        "Priority": "u=0",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "body": "authenticity_token=A-dpng1aYP9SVd-9Tjx1DJ2N7p6L3-Yi8gVgeyCmdXE8fu19P9_HsKosw4gv19YmRD5WFoSOISTDzjZKjGGt-A&frontend=true&message%5Bkind%5D=Private&message%5Bfrom_id%5D=1561876&message%5Bto_id%5D=1561876&message%5Bbody%5D=cooltest",
    "method": "POST",
    "mode": "cors"
});
}

sendComment();
