
// ==========================================
const productlist = [
{
    id: 1,
    name: "Trà Sữa Trân Châu Đường Đen",
    price: "35.000 VNĐ",
    oldPrice: "45.000 VNĐ",
    image: "../assets/images/trasua1.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Thức uống quốc dân với sự kết hợp hoàn hảo giữa cốt trà sữa truyền thống thơm béo đậm vị và những hạt trân châu đen được nấu chín tới, ngâm trong lớp siro đường đen caramel ngọt lịm, dẻo dai. Khi thưởng thức, hương vị ngọt ngào lan tỏa kết hợp cùng cảm giác dai giòn sần sật của từng viên trân châu mang đến trải nghiệm vô cùng tuyệt vời."
},
{
    id: 2,
    name: "Trà Sữa Matcha",
    price: "40.000 VNĐ",
    oldPrice: "50.000 VNĐ",
    image: "../assets/images/trasua2.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Sản phẩm sử dụng bột matcha nguyên chất nhập khẩu, giữ trọn vẹn hương thơm đặc trưng cùng vị chát nhẹ tự nhiên của trà xanh. Khi hòa quyện tinh tế cùng sữa tươi béo ngậy và đá mát lạnh, thức uống tạo nên một tổng thể màu xanh bắt mắt, đậm đà khó quên. Đây là lựa chọn lý tưởng dành riêng cho những tín đồ yêu thích hương vị trà Nhật Bản thanh tao."
},
{
    id: 3,
    name: "Trà Sữa Socola",
    price: "38.000 VNĐ",
    oldPrice: "48.000 VNĐ",
    image: "../assets/images/trasua3.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Sự kết hợp hoàn hảo đầy mê hoặc giữa vị đắng nhẹ, thơm nồng nàn của bột socola nguyên chất và nền trà sữa béo ngậy truyền thống. Thức uống có độ ngọt vừa vặn, không gây ngán, mang lại cảm giác ấm áp và thư giãn tinh thần ngay từ ngụm đầu tiên. Một ly trà sữa socola đậm vị sẽ là người bạn đồng hành lý tưởng cho những ngày làm việc căng thẳng."
},
{
    id: 4,
    name: "Khoai Tây Chiên",
    price: "25.000 VNĐ",
    oldPrice: "30.000 VNĐ",
    image: "../assets/images/anvat1.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Những thanh khoai tây tươi được cắt lát đều đặn, trải qua quy trình chiên ngập dầu hiện đại giúp lớp vỏ ngoài đạt độ vàng ươm, giòn rụm bên ngoài nhưng vẫn giữ được độ bùi, mềm xốp tự nhiên của khoai bên trong. Món ăn vặt này luôn được phục vụ nóng hổi, đi kèm combo nước chấm tương ớt cay nồng và tương cà chua ngọt kích thích vị giác."
},
{
    id: 5,
    name: "Cá Viên Chiên",
    price: "20.000 VNĐ",
    oldPrice: "25.000 VNĐ",
    image: "../assets/images/anvat2.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Món ăn vặt đường phố quen thuộc được nâng cấp với những viên cá nguyên chất dai ngon, không pha bột. Khi chiên lên, cá viên phồng to, vàng đều các mặt, tỏa hương thơm nức mũi vô cùng hấp dẫn. Khi thưởng thức, bạn sẽ cảm nhận được độ ngọt tự nhiên từ thịt cá hòa quyện cùng chút cay nhẹ của tương đen, tương ớt đặc sản đi kèm."
},
{
    id: 6,
    name: "Xúc Xích Chiên",
    price: "22.000 VNĐ",
    oldPrice: "28.000 VNĐ",
    image: "../assets/images/anvat3.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Xúc xích Đức loại cao cấp với phần thịt heo xay đậm đà, được khía hoa văn đẹp mắt trước khi cho vào chảo chiên. Khi chín, lớp vỏ ngoài giòn dai nhẹ, phần thịt bên trong mọng nước, thơm mùi khói đặc trưng. Món ăn này cực kỳ phù hợp để ăn vặt kết hợp cùng bạn bè lúc xế chiều, chấm cùng tương ớt cay hoặc sốt mayonnaise béo ngậy."
},
{
    id: 7,
    name: "Trà Đào Cam Sả",
    price: "30.000 VNĐ",
    oldPrice: "35.000 VNĐ",
    image: "../assets/images/tradao.jpg",
    productLink: "chi-tiet.html",
    cat: "tra",
    system: "tra",
    desc: "Ly nước giải nhiệt tuyệt vời cho mùa hè với hương thơm nồng nàn đặc trưng từ sả tươi đun sôi, vị chua thanh nhẹ của cam vàng mọng nước hòa quyện trên nền trà đen đậm vị. Thức uống không chỉ mang lại cảm giác sảng khoái tức thì mà còn được trang trí thêm những lát đào ngâm vàng ươm, giòn ngọt, giúp bạn vừa uống vừa có thể nhâm nhi ngon miệng."
},
{
    id: 8,
    name: "Trà Vải",
    price: "30.000 VNĐ",
    oldPrice: "35.000 VNĐ",
    image: "../assets/images/travai.jpg",
    productLink: "chi-tiet.html",
    cat: "tra",
    system: "tra",
    desc: "Trà vải thanh mát mang lại cảm giác dịu nhẹ nhờ sự kết hợp tinh tế giữa trà hồng thanh khiết và hương vị ngọt thanh tự nhiên từ quả vải vùng nhiệt đới. Mỗi ly trà đều đi kèm những quả vải ngâm dày thịt, trắng ngần, mọng nước và giòn ngọt. Đây là thức uống thanh lọc cơ thể hiệu quả, mang đến năng lượng tươi mới cho ngày dài năng động."
},
{
    id: 9,
    name: "Trà Lựu Đỏ",
    price: "32.000 VNĐ",
    oldPrice: "38.000 VNĐ",
    image: "../assets/images/traluudo.jpg",
    productLink: "chi-tiet.html",
    cat: "tra",
    system: "tra",
    desc: "Thức uống sở hữu sắc đỏ hồng tự nhiên bắt mắt quyến rũ, được chiết xuất từ những quả lựu tươi mọng nước kết hợp cùng cốt trà xanh thanh mát. Vị chua chua ngọt ngọt thanh tao lưu lại nơi đầu lưỡi kích thích vị giác mạnh mẽ. Không chỉ là một món nước giải khát đơn thuần, trà lựu đỏ còn rất giàu vitamin và chất chống oxy hóa giúp nuôi dưỡng làn da khỏe mạnh."
},
{
    id: 10,
    name: "Trà Xoài Nhiệt Đới",
    price: "35.000 VNĐ",
    oldPrice: "40.000 VNĐ",
    image: "../assets/images/traxoai.jpg",
    productLink: "chi-tiet.html",
    cat: "tra",
    system: "tra",
    desc: "Trải nghiệm hương vị mùa hè rực rỡ với dòng trà thanh mát hòa cùng mứt xoài chín vàng thơm lừng. Sự kết hợp độc đáo này mang đến vị chua ngọt đậm đà, thơm nức mũi đặc trưng của trái cây vùng nhiệt đới. Nước trà có màu vàng óng ả, uống cùng đá lạnh giúp xua tan nhanh chóng cảm giác oi bức, mệt mỏi và làm bừng tỉnh mọi giác quan."
},
{
    id: 11,
    name: "Trà Dâu",
    price: "32.000 VNĐ",
    oldPrice: "38.000 VNĐ",
    image: "../assets/images/tradau.jpg",
    productLink: "chi-tiet.html",
    cat: "tra",
    system: "tra",
    desc: "Hương vị trà dâu tươi mát được tạo nên từ cốt trà thượng hạng dầm kèm với những quả dâu tây Đà Lạt chín mọng, tạo nên vị chua ngọt cân bằng đầy tinh tế. Sắc đỏ rực rỡ tự nhiên của ly trà cùng những miếng dâu tây tươi cắt nhỏ thả bên trên tạo nên sức hút khó cưỡng, mang đến cảm giác sảng khoái và dồi dào vitamin cho cơ thể."
},
{
    id: 12,
    name: "Trà Sữa Thái Xanh",
    price: "38.000 VNĐ",
    oldPrice: "45.000 VNĐ",
    image: "../assets/images/thaixanh.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Thức uống trà sữa trứ danh đến từ xứ sở Chùa Vàng với màu xanh ngọc bích mát mắt đặc trưng. Được pha chế từ những lá trà Thái xanh chọn lọc kỹ lưỡng nấu cùng sữa béo, thức uống mang đến hương thơm thảo mộc dịu nhẹ lan tỏa khắp khoang miệng kết hợp vị béo ngậy ngọt ngào khó quên, cực kỳ thích hợp khi dùng kèm các loại thạch dẻo."
},
{
    id: 13,
    name: "Trà Sữa Thái Đỏ",
    price: "38.000 VNĐ",
    oldPrice: "45.000 VNĐ",
    image: "../assets/images/thaido.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Mang đậm phong vị ẩm thực Thái Lan truyền thống, trà sữa Thái đỏ thu hút thực khách bởi sắc cam hồng rực rỡ và hương thơm nồng nàn từ các loại hoa hồi, hạt thảo quả ẩn hiện trong vị trà. Vị chát nhẹ của trà đen được làm dịu hoàn toàn bằng sữa đặc béo ngậy tạo nên một cấu trúc đồ uống mượt mà, đậm đà, quyến rũ ngất ngây."
},
{
    id: 14,
    name: "Trà Sữa Truyền Thống",
    price: "35.000 VNĐ",
    oldPrice: "40.000 VNĐ",
    image: "../assets/images/truyenthong.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Hương vị nguyên bản mộc mạc làm nên thương hiệu của quán, được pha chế theo công thức tỷ lệ vàng giữa trà đen hữu cơ hảo hạng và sữa bột chuyên dụng cao cấp. Ly nước giữ được vị chát nhẹ tinh tế ở hậu vị nhưng vẫn dậy lên hương thơm béo ngậy mềm mịn khó cưỡng, rất dễ uống và có thể kết hợp hoàn hảo với mọi loại topping."
},
{
    id: 15,
    name: "Trà Sữa Dâu",
    price: "40.000 VNĐ",
    oldPrice: "48.000 VNĐ",
    image: "../assets/images/trasuadau.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Sự kết hợp ngọt ngào đầy lãng mạn giữa màu hồng pastel dễ thương của hương dâu tây và vị béo ngậy của dòng trà sữa hiện đại. Thức uống mang đậm hương thơm trái cây thanh mát, vị ngọt dịu nhẹ đan xen chút chua nhẹ tinh tế làm say lòng các thực khách, đặc biệt là các bạn nữ yêu thích phong cách nhẹ nhàng, trẻ trung."
},
{
    id: 16,
    name: "Trà Sữa Khoai Môn",
    price: "42.000 VNĐ",
    oldPrice: "50.000 VNĐ",
    image: "../assets/images/khoaimon.jpg",
    productLink: "chi-tiet.html",
    cat: "trasua",
    system: "trasua",
    desc: "Sản phẩm ghi điểm tuyệt đối nhờ sắc tím mộng mơ và vị bùi béo đặc trưng của khoai môn nguyên chất nghiền nhuyễn hòa quyện vào cốt trà sữa đậm đà. Điểm đặc biệt của ly trà sữa khoai môn là độ sánh mịn mượt mà, để lại hậu vị ngọt ngào, thơm bùi béo ngậy kéo dài trong cổ họng, đem lại cảm giác ngon miệng cực kỳ kích thích."
},
{
    id: 17,
    name: "Bánh Tráng Trộn",
    price: "25.000 VNĐ",
    oldPrice: "30.000 VNĐ",
    image: "../assets/images/banhtrangtron.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Món ăn vặt quốc dân được trộn đều tay giữa bánh tráng sợi dai mềm cùng nước sốt bò sa tế cay nồng, nước cốt tắc chua thanh. Đi kèm là đầy đủ các loại topping siêu chất lượng bao gồm trứng cút luộc, khô bò xé cay, khô mực xé sợi, xoài xanh bào sợi mọng nước, rau răm thơm nồng và đậu phộng rang giòn rụm bùi béo."
},
{
    id: 18,
    name: "Nem Chua Rán",
    price: "30.000 VNĐ",
    oldPrice: "35.000 VNĐ",
    image: "../assets/images/nemchuaran.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Đặc sản ăn vặt nức tiếng mang chuẩn hương vị phố cổ được làm từ thịt heo và bì heo tuyển chọn kỹ lưỡng, lăn qua lớp bột chiên xù xốp mịn. Khi chiên ngập dầu, nem chua tỏa hương thơm ngào ngạt, lớp vỏ ngoài đạt độ vàng giòn rụm lý tưởng trong khi phần thịt bên trong vẫn giữ nguyên cấu trúc dẻo dai, đậm đà, chấm kèm tương ớt cay ngọt."
},
{
    id: 19,
    name: "Phô Mai Que",
    price: "28.000 VNĐ",
    oldPrice: "35.000 VNĐ",
    image: "../assets/images/phomaique.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Món ăn gây nghiện với lớp nhân phô mai Mozzarella nguyên khối thượng hạng được bao bọc cẩn thận bên trong lớp bột chiên xù giòn tan. Khi cắn nhẹ một miếng lúc còn nóng hổi, lớp phô mai bên trong sẽ kéo sợi dài béo ngậy, tỏa ra vị thơm ngậy đặc trưng của sữa. Món này ăn kèm cùng sốt tương cà hoặc sốt tương ớt để cân bằng hương vị."
},
{
    id: 20,
    name: "Gà Viên Chiên",
    price: "25.000 VNĐ",
    oldPrice: "30.000 VNĐ",
    image: "../assets/images/gavienchien.jpg",
    productLink: "chi-tiet.html",
    cat: "anvat",
    system: "anvat",
    desc: "Những viên ức gà tươi được tẩm ướp gia vị đậm đà theo công thức độc quyền, bên ngoài phủ một lớp bột chiên xù mỏng giúp khóa chặt phần nước thịt bên trong khi chiên. Từng viên gà chiên vàng ruộm, vỏ ngoài giòn sần sật, thịt gà bên trong mềm mại, mọng nước, không bị khô cứng, là món ăn vặt lý tưởng và bổ dưỡng cho mọi lứa tuổi."
}
];
// ==========================================
// 2. HÀM SINH SẢN PHẨM (DOM THUẦN - CẬP NHẬT 2 NÚT)
// ==========================================
function addproduct(id, name, price, image, hyperlink) {
    // Khung cột lớn bao quanh phần tử
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col");

    // Khung ảnh vuông bo tròn chống tràn
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden border rounded shadow-sm bg-white");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid object-fit-contain h-100 p-2"); 

    productImage.appendChild(img);

    // Khung thông tin sản phẩm bên dưới ảnh
    const productInfor = document.createElement("div");
    productInfor.setAttribute("class", "product-infor mt-2 text-center");

    // Tên sản phẩm chữ in đậm và tự cắt ngắn khi quá dài
    const productName = document.createElement("p");
    productName.setAttribute("class", "fw-bold mb-1 text-truncate px-1 small");
    productName.textContent = name;

    // Giá màu đỏ nổi bật
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-semibold mb-2 small");
    productPrice.textContent = price;

    // KHUNG CHỨA HAI NÚT ĐIỀU HƯỚNG CẠNH NHAU (Flexbox)
    const btnGroup = document.createElement("div");
    btnGroup.setAttribute("class", "d-flex gap-1 px-1");

    // Nút 1: Xem chi tiết
    const productLink = document.createElement("a");
    productLink.textContent = "Chi tiết";
    productLink.setAttribute("href", hyperlink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm flex-grow-1 fw-medium text-white px-1");
    productLink.style.fontSize = "12px";

    // Nút 2: Thêm nhanh vào giỏ hàng (Icon 🛒+)
    const addCartBtn = document.createElement("button");
    addCartBtn.innerHTML = '<i class="bi bi-cart-plus-fill"></i>';
    addCartBtn.setAttribute("class", "btn btn-danger btn-sm px-2");
    addCartBtn.setAttribute("title", "Thêm nhanh vào giỏ");
    addCartBtn.setAttribute("onclick", `addToCart(${id})`);

    // Gắn hai nút vào hàng ngang chung
    btnGroup.appendChild(productLink);
    btnGroup.appendChild(addCartBtn);

    // Xếp các tầng vào khối thông tin sản phẩm
    productInfor.appendChild(productName);
    productInfor.appendChild(productPrice);
    productInfor.appendChild(btnGroup);

    // Kết hợp cấu trúc ảnh + thông tin thành một thực thể hoàn thiện
    productItem.appendChild(productImage);
    productItem.appendChild(productInfor);

    // Đẩy thực thể vừa dựng xong lên giao diện chính
    const listContainer = document.getElementById("product-list");
    if (listContainer) {
        listContainer.appendChild(productItem);
    }
}

// ==========================================
// 3. HÀM LOGIC QUẢN LÝ ĐỒNG BỘ GIỎ HÀNG LOCALSTORAGE
// ==========================================

// Hàm A: Quét mảng dữ liệu tính toán tổng số lượng đẩy lên Badge Header
function updateCartBadge() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("trasua_cart")) || [];
    } catch (e) {
        cart = [];
    }
    
    let totalQty = 0;
    cart.forEach(function(item) {
        let qty = parseInt(item.quantity, 10);
        totalQty += isNaN(qty) ? 1 : qty; // Ép kiểu số chặt chẽ để triệt tiêu hoàn toàn lỗi NaN
    });
    
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.textContent = totalQty;
    }
}

// Hàm B: Lưu trữ hoặc nâng số lượng sản phẩm khi người mua nhấn chọn
function addToCart(productId) {
    let cart = [];

    try {
        cart = JSON.parse(localStorage.getItem("trasua_cart")) || [];
    } catch (e) {
        cart = [];
    }

    let found = false;

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            let currentQty = parseInt(cart[i].quantity, 10);
            cart[i].quantity = (isNaN(currentQty) ? 1 : currentQty) + 1;
            found = true;
            break;
        }
    }

    // Nếu chưa có thì thêm mới
    if (!found) {
        let productData = productlist.find(function(p) {
            return p.id === productId;
        });

        if (productData) {
            cart.push({
                id: productData.id,
                name: productData.name,
                price: productData.price,
                image: productData.image,
                quantity: 1
            });
        }
    }

    // Lưu lại giỏ hàng
    localStorage.setItem("trasua_cart", JSON.stringify(cart));

    // Cập nhật badge giỏ hàng
    updateCartBadge();

    // Thông báo
const msg = document.getElementById("message");

msg.innerHTML = `
    <div class="position-fixed top-50 start-50 translate-middle alert alert-success shadow"
         style="z-index:9999;">
        Đã thêm sản phẩm vào giỏ hàng thành công! 🎉
    </div>
`;

setTimeout(function () {
    msg.innerHTML = "";
}, 3000);
}
function checkout() {
    let cart = JSON.parse(localStorage.getItem("trasua_cart")) || [];

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    let msg = document.getElementById("message");
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);

    localStorage.removeItem("trasua_cart");
    loadCart();
}

// Hàm C: Đọc chuỗi truy vấn để cập nhật nội dung cho trang chi tiết (?id=...)
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    if (isNaN(productId)) return;

    const currentProduct = productlist.find(function(item) {
        return item.id === productId;
    });

    if (currentProduct) {
        const detailName = document.getElementById("detail-name");
        if (detailName) detailName.textContent = currentProduct.name;

        const detailImg = document.getElementById("detail-img");
        if (detailImg) {
            detailImg.setAttribute("src", currentProduct.image);
            detailImg.setAttribute("alt", currentProduct.name);
        }

        const detailPrice = document.getElementById("detail-price");
        if (detailPrice) detailPrice.textContent = currentProduct.price;

        const detailOldPrice = document.getElementById("detail-old-price");
        if (detailOldPrice && currentProduct.oldPrice) {
            detailOldPrice.textContent = currentProduct.oldPrice;
        }

        const detailDesc = document.getElementById("detail-desc");
        if (detailDesc) detailDesc.textContent = currentProduct.desc;
        
        const addToCartBtn = document.getElementById("add-to-cart-btn");
        if (addToCartBtn) {
            addToCartBtn.setAttribute("onclick", `addToCart(${currentProduct.id})`);
        }
    }
}

// Lắng nghe cấu trúc cây DOM sẵn sàng để khởi chạy toàn cục ổn định
document.addEventListener("DOMContentLoaded", function() {
    updateCartBadge();
    renderProductDetail();
});