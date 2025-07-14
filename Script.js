const mallaData = [
  {
    semestre: "Primer semestre",
    materias: [
      { id: "ling_gen", nombre: "Lingüística General", creditos: 3, prereqs: [] },
      { id: "com_oral_1", nombre: "Comunicación Oral y Escrita I", creditos: 3, prereqs: [] },
      { id: "anat_histo", nombre: "Anatomía e Histología Funcional", creditos: 3, prereqs: [] },
      { id: "opt_des_hum", nombre: "Optativa – Desarrollo Humano", creditos: 2, prereqs: [] },
      { id: "intro_fono", nombre: "Introducción a la Fonoaudiología", creditos: 2, prereqs: [] },
      { id: "ingles_1", nombre: "Inglés I", creditos: 3, prereqs: [] },
    ],
  },
  {
    semestre: "Segundo semestre",
    materias: [
      { id: "ling_apli", nombre: "Lingüística Aplicada", creditos: 3, prereqs: ["ling_gen"] },
      { id: "mec_ondas", nombre: "Mecánica y Ondas para Biociencias", creditos: 4, prereqs: ["matematicas"] },
      { id: "neuroanat", nombre: "Neuroanatomía Estructural y Funcional", creditos: 2, prereqs: ["anat_histo"] },
      { id: "cabeza_cuello", nombre: "Cabeza, Cuello y Tórax", creditos: 2, prereqs: ["anat_histo"] },
      { id: "desordenes_com", nombre: "Desórdenes de Comunicación", creditos: 4, prereqs: [] },
      { id: "ingles_2", nombre: "Inglés II", creditos: 3, prereqs: ["ingles_1"] },
    ],
  },
  {
    semestre: "Tercer semestre",
    materias: [
      { id: "psic_evo", nombre: "Psicología Evolutiva", creditos: 3, prereqs: [] },
      { id: "juicio_clin", nombre: "Juicio Clínico en Fonoaudiología", creditos: 3, prereqs: ["intro_fono"] },
      { id: "fund_habla", nombre: "Fundamentos del Habla", creditos: 3, prereqs: [] },
      { id: "fund_leng", nombre: "Fundamentos del Lenguaje", creditos: 3, prereqs: [] },
      { id: "fund_audicion", nombre: "Fundamentos de Audición", creditos: 2, prereqs: [] },
      { id: "ingles_3", nombre: "Inglés III", creditos: 3, prereqs: ["ingles_2"] },
    ],
  },
  {
    semestre: "Cuarto semestre",
    materias: [
      { id: "psicolinguistica", nombre: "Psicolingüística", creditos: 3, prereqs: ["ling_apli"] },
      { id: "com_oral_2", nombre: "Comunicación Oral y Escrita II", creditos: 3, prereqs: ["com_oral_1"] },
      { id: "leng_infantil", nombre: "Lenguaje Infantil y del Adolescente", creditos: 3, prereqs: ["fund_leng"] },
      { id: "interv_habla", nombre: "Intervención del Habla", creditos: 3, prereqs: ["fund_habla"] },
      { id: "audiologia_basica", nombre: "Audiología Básica", creditos: 3, prereqs: ["fund_audicion"] },
      { id: "ingles_4", nombre: "Inglés IV", creditos: 3, prereqs: ["ingles_3"] },
    ],
  },
  {
    semestre: "Quinto semestre",
    materias: [
      { id: "opt_i", nombre: "Optativa I", creditos: 2, prereqs: [] },
      { id: "bioestadistica", nombre: "Bioestadística Fundamental", creditos: 3, prereqs: [] },
      { id: "interv_func_oral", nombre: "Intervención de la Función Oral Faríngea", creditos: 3, prereqs: ["fund_habla"] },
      { id: "leng_edu_aprend", nombre: "Lenguaje en la Educación y el Aprendizaje", creditos: 3, prereqs: ["leng_infantil"] },
      { id: "interv_audiologica", nombre: "Intervención Audiológica", creditos: 3, prereqs: ["audiologia_basica"] },
    ],
  },
  {
    semestre: "Sexto semestre",
    materias: [
      { id: "opt_ii", nombre: "Optativa II", creditos: 2, prereqs: [] },
      { id: "opt_iii", nombre: "Optativa III", creditos: 3, prereqs: [] },
      { id: "opt_avanzada", nombre: "Optativa Avanzada", creditos: 3, prereqs: [] },
      { id: "leng_adulto", nombre: "