import { useState } from 'react'

const useNews = () => {
  const [news] = useState([
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve en una tarde de verano de 19899', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
  ])

  return { news }
}

export default useNews;
