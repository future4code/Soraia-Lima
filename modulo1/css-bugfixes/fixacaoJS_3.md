```
function calculaNota(ex, p1, p2) {

 const media = (ex * 1 + p1 * 2 + p2 * 3) /6
 
 const conceitoA = "A"
 const conceitoB = "B"
 const conceitoC = "C"
 const conceitoD = "D"
 
  if(media >= 9){
  return conceitoA
    
  }
  else if((media < 9) && (media >= 7.5)){
    return conceitoB
  }
  else if((media < 7.5) && (media >=6)){
    return conceitoC
  }
  else {
    return conceitoD
  }
}
```