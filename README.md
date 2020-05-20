## Form Sebelum Di Submit
![enter image description here](https://image.prntscr.com/image/dG1dKqbmR1ul7MufElui0g.png)
## Form Sebelum Setelah Di submit
![enter image description here](https://image.prntscr.com/image/wS5toZ9FQ__vanuGzJiM0A.png)
## Logic

```javascript
if (nilai_akhir > 85){
	index_nilai = 'A';
}else  if(nilai_akhir >= 81 && nilai_akhir <= 85){
	index_nilai = 'A-';
}else  if(nilai_akhir >= 76 && nilai_akhir <= 80){
	index_nilai = 'B+';
}else  if(nilai_akhir >= 71 && nilai_akhir <= 75){
	index_nilai = 'B';
}else  if(nilai_akhir >= 66 && nilai_akhir <= 70){
	index_nilai = 'B-';
}else  if(nilai_akhir >= 61 && nilai_akhir <= 65){
	index_nilai = 'C+';
}else  if(nilai_akhir >= 50 && nilai_akhir <= 60){
	index_nilai = 'C';
}else  if(nilai_akhir < 50){
	index_nilai = 'E';
}else{
	index_nilai = 'Index Error';
}
```
