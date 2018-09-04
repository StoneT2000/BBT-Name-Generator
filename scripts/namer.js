$(document).ready(function () {
  console.log("change name")
  $(document).on('click', function () {
    $("#name").text(generate_name());
  })
});

function generate_name(){
  /*
  var final_name = '';
  var i1 = Math.round(Math.random() * (articles.length - 1))
  var i2 = Math.round(Math.random() * (prename.length - 1))
  var i3 = Math.round(Math.random() * (names.length - 1))
  var i4 = Math.round(Math.random() * (technical.length - 1))
  var i5 = Math.round(Math.random() * (technical2.length - 1))
  final_name += articles[i1]['article'] + ' '
  var i2 = Math.round(Math.random() * (articles[i1]['prename'].length - 1))
  if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
      var i0 = Math.round(Math.random() * (adjectives.length - 1))
      final_name += adjectives[i0] + ' '
    }
    final_name += articles[i1]['prename'][i2] + ' '
  }
  
  final_name += names[i3] + ' ';
  final_name += technical[i4] + ' ';
  if (Math.random() > 0.5) {
    final_name += technical2[i5] + ' ';
  }
  */
  var final_name = 'The ';
  //var i0 = Math.round(Math.random() * (adjectives.length - 1));
  var i2 = Math.round(Math.random() * (terms.length - 1));
  if (Math.random() > 0.2 ){
    var i1 = Math.round(Math.random() * (nouns.length - 1));
    final_name += nouns[i1]+ ' ';
  }
  else {
    var i1 = Math.round(Math.random() * (lastnames.length - 1));
    final_name += lastnames[i1];
    if (Math.random() > 0.5) {
      final_name += '/';
    }
    else {
      final_name += '-';
    }
    var i2 = Math.round(Math.random() * (lastnames.length - 1));
    while (i2 == i1) {
      i2 = Math.round(Math.random() * (lastnames.length - 1));
    }
     final_name += lastnames[i2] + ' ';
  }
  
  final_name += terms[i2] + ' ';
  return final_name;
}

//Overall structure of a Big Bang Theory Name
//The + [Adjective] + [Sciency Noun or Food] + [Some Scientific Term/Noun]
//The + [Adjective] + [Last Names combo] + [Sciency Noun or Food] + [Term]
//var adjectives = ['']

var nouns = ['Russian Rocket', 'Egg Salad', 'Yale-鸭力', 'Ham Sandwich', 'Chicken McNugget', 'Club Turkey', 'Yellow Hat', 'Isolation', 'Wiggly Finger', 'Chi-Squared', 'Unicorn', 'Holographic', 'Extract', 'Fish Guts', 'Bakersfield', 'Orange Juice', 'Scavenger', 'Colonization', 'Probabilistic', 'Gyroscopic', 'Cognition', 'Collaboration', 'Geology', 'Conjugate', 'Paradise', 'Comic Book', 'Comic Book Store', 'Public Restroom',
             'Bono', 'Raiders', 'Leonard', 'Sheldon', 'Penny', 'Hawking', 'Amy', 'Howard', 'Bernadette', 'Stuart', 'Spock']
var lastnames = ['Hofstadter', 'Wolowitz', 'Koothrappali', 'Cooper', 'Fowler']
var terms = ['Initiation', 'Equivalency', 'Equivalence Relation', 'Equivalence Solution', 'Solution', 'Test', 'Maneuver', 'Acquisition', 'Formulation', 'Contraction', 'Expansion', 'Factor', 'Reccurence', 'Diffusion', 'Disintegration', 'Transformation', 'Vortex', 'Malfunction', 'Coefficient', 'Convergence', 'Divergence', 'Limit', 'Excitation', 'Acceleration', 'Attraction', 'Repulsion', 'Pulse', 'Proximity Test', 'Resonance', 'Minimization', 'Insufficiency', 'Thermalization', 'Detoriation', 'Transmission', 'Incursion', 'Combustion', 'Estimation', 'Optimization', 'Sublimation', 'Reverberation', 'Permutation', 'Materialization', 'Submergence', 'Exfoliation', 'Oscillation', 'Fluctuation', 'Application', 'Synthesis', 'Hysteresis', 'Path', 'Chromatic Number', 'Summation', 'Deviation', 'Automation', 'Evaporation', 'Condensation', 'Asymmetry', 'Conundrum', 'Agitation', 'Regulation', 'Dissonance', 'Harmony', 'Initiative', '']


/*
var prename = ['Colloquial', 'Insignificant', 'Significant']
var adjectives = ['Long', 'Short', 'Colloquial', 'Insignificant', 'Significant', 'Overdone']
var names = ['Egg Salad', 'Yale-鸭力', 'Ham Sandwich', 'Chicken McNugget', 'Club Turkey', 'Yellow Hat', '']

var technical = ['Equivalency', 'Equivalence', 'Asymmetry']
var technical2 = ['Relation', 'Problem', 'Solution']
var prename_A = ['Introduction to the']

//We first choose an article, The, A etc....
//Depending on article is a relevant pre_name, names list.
var articles = [{'article': 'The', 'prename':prename,'names': names}, 
                {'article': 'A', 'prename': prename_A,'names':names}]
*/