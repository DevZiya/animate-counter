const counters=document.querySelectorAll('.counter');
const speed=200;
const up=document.querySelector('.up')


counters.forEach(counter => {
    
     const updateCount = () => {
         const target= +counter.getAttribute('data-target');
         const count= +counter.innerText;

         const inc= target / speed

         if(count < target){
             counter.innerText=inc + count;
             setTimeout(updateCount,1);
         }else{
             count.innerText=target;
         }

     }
     updateCount();
})