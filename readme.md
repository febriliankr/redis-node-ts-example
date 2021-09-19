# Sejawat.idn Statistics Dashboard API

## Schema

course_id -> ID dari wp_posts

contoh:

course_id = 826 ->

di wp_posts itu ID = 826

## Question

contoh question_id = 3348

## Timeline

27 September

### Figuring Out The Schema

wp_posts, column post_type includes:

- stm-lessons
- stm-quizzes
- stm-questions

### Endpoints

- get all quizzes
  - bisa query SELECT \* FROM wp_posts WHERE post_type = 'stm-quizzes';
  - bisa query SELECT \* FROM wp_posts WHERE post_type = 'stm-questions';
- get all users by quiz_id

```
{
    "quiz_id": 1938,
    "users": {
        [
            "user_id": 90,
            "status": "passed"
            "progress": 90 // nilai
            "answers": [
                {
                    question_id: 1927
                    user_answer: "A. Gangguan depresi berat"
                    correct_answer: 1 // bener berarti kalo 1
                }
            ] // query dari (wp_stm_lms_user_answers) table by quiz_id
        ]
    }
}
```

## Data Display

- Mini Dashboard
  - Login Admin $Basic Auth Token
  - Display Semua Tryout yang ada
  - Klik satu tryout, diarahkan ke halaman tryout, contoh: "TRY OUT FKUI 8 AGUSTUS 2021"
  - `Halaman Tryout`
    - Display basic statistics dari tryoutnya
      - [x] Contoh: "Mean: 58.71, Median: 60.83, Max: 83.33, Min: 8.33"
      - Contoh 2: Display username dan nilai top 3 tryout
      - [x] Contoh 3: Display berapa persen lulus
    - Visualisasi Data
      - [ ] Distribusi nilai (85-100, 80.00-84.99, dst)
        - [x] API
        - [ ] FE
        
- Export to excel
  - Per Tryout
    - Analisis Per Soal
      - Display nomor soal 1 - N
        - [ ] /api/v1/quizzes/:quiz_id (eg: 3191) ada questions array yang isinya ada right
        - Display berapa banyak orang yang salah di setiap nomor
        - Display juga total peserta tryoutnya berapa (jumlah_peserta)
        - Display persentase yang salah (peserta_salah["nomor_soal"]/jumlah_peserta)
    - Analisis Per User
      - Display score, lulus atau nggak (lulus is when score >= 66) untuk setiap usernya
      - Display jawaban dia -> contoh "A. Gangguan depresi berat"
        - Note: gak bisa hurufnya (cth: A) doang karna isi databasenya kaya gitu
