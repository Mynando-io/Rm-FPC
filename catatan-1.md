# Ini adalah catatan mengenai penempatan Folder dan contentnyaq

List Folder yang boleh dikerjakan (semua folder ada dibawah folder "src"):
- "mapel" - Adalah folder untuk menyimpan halaman mata pelajaran
- "quiz" - adalah bagian dimana kita akan menyimpan halaman quiz
- "latihan" - adalah folder untuk menyimpan data halaman untuk latihan 


Aturan Sebelum membuat halaman baru:
- Copy file "Template.vue" yang ada pada setiap folder, lalu tempel pada folder dimana yang ingin dikerjakan
- rename "Template.vue" menjadi sesuai kebutuhan misal "HTML.vue" atau "CSS.vue". File Harus berformat ".vue"


File dan folder yang **Tidak boleh disentuh** adalah:
- node_modules
- .gitignore
- .idx
- router.js (Hubungi penanngung jawab setiap kali anda sudah upload tugas)

Note Catatan 

```

import EN1 from './latihan/expo-note1.vue'
import EN2 from './latihan/expo-note2.vue'
import EN3 from './latihan/expo-note3.vue'



{ path: '/expo-note1', component: EN1},
  { path: '/expo-note2', component: EN2},
  { path: '/expo-note3', component: EN3},
```