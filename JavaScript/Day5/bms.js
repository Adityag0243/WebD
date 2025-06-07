function showSummary(){

    document.querySelector('.bookingSummary').style.display = 'block';

    const moviePosters = {
        "Movie 1": "images/movie1.jpg",
        "Movie 2": "images/movie2.jpg",
        "Movie 3": "images/movie3.jpg"
    };
    movie = document.getElementById('lstMovies').value;
    document.getElementById('movieDd').textContent = movie;

    document.getElementById('cinemaDd').textContent = document.getElementById('lstCinema').value;
    document.getElementById('dateDd').textContent = document.getElementById('lstDates').value;
    document.getElementById('timeDd').textContent = document.getElementById('lstTimes').value;
    document.getElementById('slotDd').textContent = document.getElementById('lstSeats').value;
    
    imgBox = document.getElementById('moviePoster')

    if(movie == 'Movie 1'){
        imgBox.src = 'Movie 1';
    }
}