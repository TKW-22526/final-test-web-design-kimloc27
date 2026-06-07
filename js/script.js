
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
    desc: "Trà sữa thơm béo kết hợp trân châu đường đen dai ngon."
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
    desc: "Matcha nguyên chất hòa quyện cùng sữa tươi tạo hương vị đậm đà."
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
    desc: "Sự kết hợp hoàn hảo giữa trà sữa và socola thơm ngon."
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
    desc: "Khoai tây chiên giòn rụm, ăn kèm tương ớt và tương cà."
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
    desc: "Cá viên chiên nóng hổi, thơm ngon hấp dẫn."
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
    desc: "Xúc xích chiên vàng giòn, phù hợp ăn vặt mọi lúc."
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
    desc: "Trà đào cam sả thanh mát."
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
    desc: "Trà vải thanh mát với những quả vải ngọt thơm."
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
    desc: "Trà lựu đỏ chua ngọt, giàu vitamin."
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
    desc: "Hương vị xoài tươi mát, đậm chất nhiệt đới."
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
    desc: "Trà dâu thơm ngon với vị chua ngọt tự nhiên."
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
    desc: "Trà sữa Thái xanh thơm béo, đậm vị trà."
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
    desc: "Trà sữa Thái đỏ nổi tiếng với hương vị đặc trưng."
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
    desc: "Trà sữa truyền thống thơm béo, dễ uống."
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
    desc: "Trà sữa kết hợp hương dâu ngọt ngào hấp dẫn."
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
    desc: "Trà sữa khoai môn thơm bùi, béo ngậy."
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
    desc: "Bánh tráng trộn đậm đà với nhiều topping hấp dẫn."
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
    desc: "Nem chua rán vàng giòn, thơm ngon khó cưỡng."
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
    desc: "Phô mai que kéo sợi béo ngậy, giòn rụm."
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
    desc: "Gà viên chiên thơm ngon, phù hợp ăn vặt."
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