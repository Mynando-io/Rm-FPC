# FPC (Free Programming Course)

>Note

Adalah Project yang menjelaskan tentang bahasa pemrograman, dan lingkup dunia website.

Ikuti tahapan dibawah ini secara ber-urutan!

## Tahap persiapan cloud server

1. Buka "firebase google" didalam mesin pencari
2. pilih get started
3. login melalui email google
4. setelah masuk firebase studio pastikan "Third-party cookies" allowed
5. pada bagian kiri, pilih tombol "New Workspace"
6. scroll kebawah dan pilih web templates "Vue.js"
7. Beri nama aplikasi tersebut, nama bebas!
8. Tunggu hingga proses selesai
9. setelah itu anda akan dibawa kedalam platfrom cloud server milik firebase
![image](https://github.com/user-attachments/assets/571f7ebe-e448-48bf-8065-483b481bff6e)

11. Pada bagian kiri, yaitu dibawah logo Firebase Studio. hapus semua file kecuali: `.idx, .vscode, node_modules`
12. cara menghapus file atau folder adalah dengan cara click kanan pada file tersebut, dan pilih "Delete permanetly"
![image](https://github.com/user-attachments/assets/2bc981ab-a052-45c8-b867-9ee02dcabfa8)
13. hingga bagian kanan menyerupai gambar diatas!

## Tahap persiapan github dan project
1. buat tab baru
1. ketik github pada mesin pencari
2. pilih sign in atau sign up jika belum punya github
3. kembali pada tab sebelumnya yanng mengenai "Firebase google"
![image](https://github.com/user-attachments/assets/4abb1d62-4f9b-4c69-941c-16dac315eb91)

5. pada firebase studio, klik icon 3 garis tepat dibawah Logo "Firebase studio"
6. lalu pilh terminal, new terminal
![image](https://github.com/user-attachments/assets/99d72d97-67ab-4caa-8208-0cec00832c81)
7. pada terminal ketik `ssh-keygen`
8. click tombol "Enter" untuk setiap pertanyaan yang diajukan
9. pilih "openssh"
10. dan juga ketik `cat ~/.ssh/id*.pub`
![image](https://github.com/user-attachments/assets/64384583-daa0-4491-bf97-29e80c031284)

12. block code yang dihasilkan command diatas selayaknya ingin melakukan copy paste, gunakan "ctrl+c"
13. kembali kepada tab Github sebelumnya
![image](https://github.com/user-attachments/assets/7c15d3ec-faa9-4876-9912-fef20b5c0369)
14. Pada pojok kanan atas, lokasi tepat pada logo pikachu kuning (gambar github anda pasti berbeda dengan screenchoot). Click
15. scroll ke bawah dan pilih setting
16. setelah masukk pada halaman baru, scroll ke bawah lagi
17. Pilih "SSH and GPG keys" pada bagian kiri monitor
![image](https://github.com/user-attachments/assets/1dd90bc9-f0a8-46a3-934e-516a288307cf)
18. click "SSH and GPG keys" dan pilih "New SSH Key" (Tombol warna hijau tua)
![image](https://github.com/user-attachments/assets/be865975-a230-4d74-bdc1-a650e35548c2)
19. Pada Form "Title" silahkan diisi bebas
20. Pada form "Key" tempel code tadi (langkah ke 11)
![image](https://github.com/user-attachments/assets/b6f42e8a-3a31-4876-be1c-03e21a93d5fe)
22. selanjutnya copy/buka link ini (https://github.com/playmakermz/Rm-FPC)
23. click button "Fork" pada bagian kanan atas ( diatas tulisan "About" cetak tebal )
![image](https://github.com/user-attachments/assets/feb4bfd8-197f-4825-8f64-c45327ea630d)
24. setelah itu click tombol hijau "Create fork" ( Anda tidak perlu melakukan configurasi, cukup click tombol hijau )
25. tunggu hingga selesai
26. click pada button hijau tua "<> Code"
![image](https://github.com/user-attachments/assets/7295041b-a6f3-47eb-b623-df216669c1ff)
27. Pilih opsi SSH
28. copy code dibawahnya! contoh `git@github.com:playmakermz/Rm-FPC.git`
29. kembali pada "Firebase Studio"
30. pada bagian terminal ketik `git clone` kasih 1 space(sepasi) dan tempel code tadi, lalu enter
31. Jika ada pertanyaan muncul pada terminal, ketik `yes`
32. tunggu hingga selesai
![image](https://github.com/user-attachments/assets/2aaf938c-c739-487a-bb16-139b93810549)

33. pastikan pada bagian kiri ada Folder bernama `Rm-FPC`
34. pada terminal ketik `cd Rm-FPC`
35. selanjutnya ketik juga ini pada terminal `npm install vue-router@4`
36. Ketik ini juga `npm i bootstrap bootstrap-vue-next` (Tahapan baru, ada untuk membantu anda memakai fitur bootstrap untuk vuejs)
36. setelah itu ketik `npm run dev`
![image](https://github.com/user-attachments/assets/53e386b0-6be9-48dd-94f7-3518c0d55574)
35.pada link warna biru, tahan tombol "ctrl" dan click link "localhost" warna biru tersebut
37. selamat, sekarang project telah berjalan diatas cloud server anda
38. Setelah selesai coding, bisa langsung ke **Tahap jika sudah melakukan coding didalm project**


## Setiap kali awal buka project Lakukan ini!
1. Buka terminal baru, sama seperti pada tahap ke 5 diatas ( pada bagian "Tahap persiapan github dan project" )
1. pada terminal ketikk `cd Rm-FPC`
2. dan terminal anda menyerupai dibawah ini
![image](https://github.com/user-attachments/assets/efd76c92-36a7-46b9-95fd-cfe126afa16e)
4. **Wajib lakukan ini** setiap kali temen-temen mau mengerjakan project.
5. Check github anda, dan cari repository "Fork" yang kalian buat (Tahap 23)
6. Jika ada informasi "This branch is ... commits behind" maka
7. click tombol "Sync Fork"
8. Lalu pilih tombol hijau tua "Update Branch" seperti dibawah ini
![image](https://github.com/user-attachments/assets/23034daa-4c64-4909-b9ef-fa220de55b52)
9. setelah itu ketik `git pull` pada terminal ( Pastikan melakukan ini setiap kali anda masuk kedalam project )
10. dilanjutkan dengan `npm run dev`


## Tahap selanjutnya jika sudah menyelesaikan code
1. pada terminal ketik `git add .`
2. selanjutnya `git commit -am 'diantara tanda petik ini bebas'`
3. selanjutnya `git push`
![image](https://github.com/user-attachments/assets/4daf3f1e-4e11-4e0e-9c23-7d3c0d169baa)
4. buka github kalian
5. click "Contribute"
6. Isi kolom title dan deskrip dengan bebas(sesukanya)
7. Kabari Penanggung jawanb jika sudah 


## Konfigurasi Semua block code 

1. untuk integrasi content didalam block code lakukan ini

Contoh Content didalam block code:
![image](https://github.com/user-attachments/assets/2b785232-f35f-472e-b68c-56565c0e4ff5)

Versi Raw(Original)
![image](https://github.com/user-attachments/assets/cca9662d-abd3-455c-8a13-a6c596352409)

3. perisapkkan HTML Tag seperti ini
```html

<pre>
<code>




</code>
</pre>

```
3. Lakukan escape character ( Hanya untuk bahasa  HTML )
4. Gunakan ini untuk melakukan Tahap 3: https://emn178.github.io/online-tools/html_encode.html 
5. Tempel code HTMl, dan Copy hasil escape character pada bagian "Output"
6. Lalu tempel code "Output" kedalam perispan HTML Tag kita, yaitu diantara  `<code>`
7. Sedangkan untuk bahasa pemgroraman lain, tidak perlu mengerjakan tahapan 3-5. Cukup tempel code kedalam tag `<code>`



## Referensi:
- https://www.codiga.io/blog/display-code-snippets-in-html/ 
