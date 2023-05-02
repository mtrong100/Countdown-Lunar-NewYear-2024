let tetAmLich = new Date("February 10, 2024 00:00:00").getTime();
function newYear() {
  /*Lấy thời gian ngày hiện tại (mily giây) */
  let ngayHienTai = new Date().getTime();

  /*Tính thời gian còn lại (mily giây) */
  thoigianConLai = tetAmLich - ngayHienTai;
  if (thoigianConLai === tetAmLich) {
    clearInterval;
  }
  /*Chuyển đơn vị thời gian tương ứng sang mili giây*/
  let giay = 1000;
  let phut = giay * 60;
  let gio = phut * 60;
  let ngay = gio * 24;

  /*Tìm ra thời gian theo ngày, giờ, phút giây còn lại thông qua cách chia lấy dư(%) và làm tròn số(Math.floor) trong Javascript*/
  let dayNumber = Math.floor(thoigianConLai / ngay);
  let hourNumber = Math.floor((thoigianConLai % ngay) / gio);
  let minuteNumber = Math.floor((thoigianConLai % gio) / phut);
  let secondnumber = Math.floor((thoigianConLai % phut) / giay);

  /*Hiển thị kết quả ra các thẻ Div với ID tương ứng*/
  document.getElementById("days").innerText = dayNumber;
  document.getElementById("hours").innerText = hourNumber;
  document.getElementById("minutes").innerText = minuteNumber;
  document.getElementById("seconds").innerText = secondnumber;
}

/*Thiết Lập hàm sẽ tự động chạy lại sau 1s*/
setInterval(function () {
  newYear();
}, 1000);

const btn = document.querySelector("#btn");
const song = document.querySelector("#song");
let playing = true;

btn.addEventListener("click", function () {
  if (playing) {
    song.play();
    playing = false;
  } else {
    song.pause();
    playing = true;
  }
});
