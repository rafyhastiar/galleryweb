const container = document.querySelector('.container');
const besar = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    
    if( e.target.className == 'thumb'){
        
        besar.src = e.target.src;
        besar.classList.add('fadeIn');
        setTimeout(function(){
            besar.classList.remove('fadeIn');
        }, 500)
        thumbs.forEach(function(thumb){
            if ( thumb.classList.contains('active')){
                thumb.classList.remove('active');
            }
            // thumb.className = 'thumb'
        });

        e.target.classList.add('active');
    }
});