(function () {
  const extra = {
    fr: {
      'Instructional Technology Scholar · STEM Curriculum Designer': 'Chercheur en technologies éducatives · Concepteur de programmes STIM',
      'Educator · Researcher · Designer': 'Éducateur · Chercheur · Concepteur'
    },
    es: {
      'Instructional Technology Scholar · STEM Curriculum Designer': 'Investigador en tecnología educativa · Diseñador curricular STEM',
      'Educator · Researcher · Designer': 'Educador · Investigador · Diseñador'
    }
  };
  Object.keys(extra).forEach((language) => Object.assign(window.PORTFOLIO_TRANSLATIONS[language], extra[language]));
}());
