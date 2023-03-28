const initializeState =
    [{ "id": 1, "img": "https://cdn1.ozone.ru/s3/multimedia-9/6241430877.jpg", "name": "Iphone 13 pro", "grade": 0, "price": 750, "imgold": "https://paragraf.uz/wp-content/uploads/2021/12/paragraf.uz-iphone-13-pro-max-sierra-kredit-rassrochka-kredit.png", "imgchet": "https://tehnoteca.ru/img/2091/2090047/apple_iphone_13_pro_128gb_9.jpg", "status1": false, "status2": false }, { "id": 2, "img": "https://apple-com.ru/image/cache/catalog/product/Accessories/xs-11/791744-20iiei-btrp-20luxcase-20tpu-2Bpc-20mol-20apple-20iphone-2011-20kuvfzukhro-800x700h.jpg", "name": "Iphone 12 pro", "grade": 0, "price": 450, "imgold": "https://call-store.ru/upload/iblock/766/i8vfr7klm48bscf1qq14v6n0mwvnwr8x.jpg", "imgchet": "https://cdn1.ozone.ru/s3/multimedia-8/6387812564.jpg", "status1": false, "status2": false }, { "id": 3, "img": "https://d16lwq5o0fvd7.cloudfront.net/images/catalogue/products/mhke3zma/mhke3zma.jpg", "name": "Iphone 12 pro selikonoviy", "grade": 0, "price": 460, "imgold": "https://ae04.alicdn.com/kf/H3af6cf1433104715ba14f8dbab064b99Q/ESR-iPhone-12.jpg_640x640.jpg", "imgchet": "https://tehnoteca.ru/img/2109/2108076/apple_leather_case_with_magsafe_for_iphone_13_8.jpg", "status1": false, "status2": false }, { "id": 4, "img": "https://image-cdn.kazanexpress.ru/brh0r55667frpptjnuj0/original.jpg", "name": "Apple BYZ S852I", "grade": 0, "price": 30, "imgold": "https://pchelkindom.ru/wa-data/public/shop/products/76/90/79076/images/37148/37148.970.jpg", "imgchet": "https://avatars.mds.yandex.net/get-mpic/5268639/img_id5851502439675988378.jpeg/orig", "status1": false, "status2": false }, { "id": 5, "img": "https://avatars.mds.yandex.net/i?id=2aed946e6952f9f074708b95b38886b7655a9ccb-6235668-images-thumbs\u0026ref=rim\u0026n=33\u0026w=174\u0026h=150", "name": "Apple EarPods", "grade": 0, "price": 50, "imgold": "https://gsm-opt.ru/userfiles/image/full/24521.jpg", "imgchet": "https://avatars.mds.yandex.net/get-mpic/5344223/img_id1122110787527012162.jpeg/orig", "status1": false, "status2": false }, { "id": 6, "img": "https://itunite.ru/upload/iblock/32a/32a49ff646c2d7d6e87d13cc77a3c51e.jpg", "name": "Apple AirPods", "grade": 0, "price": 55, "imgold": "https://sc01.alicdn.com/kf/HTB1dFZiaijrK1RjSsplq6xHmVXar.jpg", "imgchet": "https://cdn1.ozone.ru/multimedia/1036814202.jpg", "status1": false, "status2": false }, { "id": 7, "img": "https://kiberzona72.ru/upload/iblock/5f8/5f84c37518af110144f86289887ea205.jpg", "name": "Plastation Headphones", "grade": 0, "price": 273, "imgold": "https://rabbitgo.ru/wp-content/uploads/2019/07/Screenshot_1-1.png", "imgchet": "https://cdn.rbt.ru/images/gen/item_image/image/6469/24/646818_r3364.jpg", "status1": false, "status2": false }, { "id": 8, "img": "https://cdn1.ozone.ru/s3/multimedia-q/6264350618.jpg", "name": "Beats Studio 3", "grade": 0, "price": 100, "imgold": "https://cdn1.ozone.ru/s3/multimedia-r/6363364767.jpg", "imgchet": "https://avatars.mds.yandex.net/i?id=766bfe9dc4c90f0678bab6dd0e1ea61f-5238957-images-thumbs\u0026ref=rim\u0026n=33\u0026w=150\u0026h=150", "status1": false, "status2": false }, { "id": 9, "img": "https://img.tttcdn.com/product/xy/500/500/p/gu1/V/9/V7689/V7689-1-05b9-USWm.jpg", "name": "True Wireless Наушники Bluetooth", "grade": 0, "price": 80, "imgold": "https://sc01.alicdn.com/kf/H8dca47018ec14689be23e98d1070f842M.jpg", "imgchet": "https://avatars.mds.yandex.net/i?id=bf4050b26d721ba505948163765a1c70-5408886-images-thumbs\u0026ref=rim\u0026n=33\u0026w=150\u0026h=150", "status1": false, "status2": false }]



function Search_input(state = initializeState, action) {
    const son = 0
    const son2 = 0
    // localStorage.setItem("count1", JSON.stringify(initializeState));
    if (localStorage.length == 0) {
        localStorage.setItem("count1", JSON.stringify(initializeState));
        localStorage.setItem("count2", JSON.stringify(initializeState));
        localStorage.setItem("son", JSON.stringify(son));
        localStorage.setItem("son1", JSON.stringify(son2));
    } else {
    }
    if (action.type == 'like') {

        let mas1 = JSON.parse(localStorage.getItem('count1'))
        let mas2 = JSON.parse(localStorage.getItem('count2'))
        let son1 = localStorage.getItem('son')
        
        if (document.querySelector('.inp1').value == '') {

            if (mas1[action.payload.index].status1 == false) {
                son1++
            } else {
                son1--
            }
            mas1[action.payload.index].status1 = !mas1[action.payload.index].status1
            localStorage.setItem("count1", JSON.stringify(mas1));
            localStorage.setItem("count2", JSON.stringify(mas1));
            localStorage.setItem("son", JSON.stringify(son1));
        } else {
            mas1 = mas2
            if (mas1[action.payload.index].status1 == false) {
                son1++
            } else {
                son1--
            }
            mas1[action.payload.index].status1 = !mas1[action.payload.index].status1
            localStorage.setItem("count1", JSON.stringify(mas1));
            localStorage.setItem("count2", JSON.stringify(mas1));
            localStorage.setItem("son", JSON.stringify(son1));
        }

        state = mas1
        return state
    }
    if (action.type == 'savat') {
        let mas1 = JSON.parse(localStorage.getItem('count1'))
        let son2 = localStorage.getItem('son1')
        if (mas1[action.payload.index].status2 == false) {
            son2++
        } else {
            son2--
        }
        mas1[action.payload.index].status2 = !mas1[action.payload.index].status2
        localStorage.setItem("count1", JSON.stringify(mas1));
        localStorage.setItem("count2", JSON.stringify(mas1));
        localStorage.setItem("son1", JSON.stringify(son2));

        state = mas1
        console.log(mas1);
        return state
    }
    if (action.type == 'search') {
        let mas1 = JSON.parse(localStorage.getItem('count1'))
        mas1 = action.payload.name
        localStorage.setItem("count1", JSON.stringify(mas1));
        // localStorage.setItem("count2", JSON.stringify(mas1));
        return state
    }
    if (action.type == 'yulduz') {
        let mas1 = JSON.parse(localStorage.getItem('count1'))
        mas1[action.payload.index].grade = action.payload.hover
        localStorage.setItem("count1", JSON.stringify(mas1));
        localStorage.setItem("count2", JSON.stringify(mas1));
        state = mas1
        return state
    }
    return state
}

export { Search_input };