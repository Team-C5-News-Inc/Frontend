import { useState } from 'react'

const useNews = () => {
  const [news] = useState([
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPb48vgplgjiP56YHSK0Vt19TRuvRNwMK6g&usqp=CAU' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
  ])

  return { news }
}

export default useNews;
