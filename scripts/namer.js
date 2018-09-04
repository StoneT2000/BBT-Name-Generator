$(document).ready(function () {
  console.log("change name")
  $(document).on('click', function () {
    $("#name").text(generate_name());
  })
});

function generate_name(){
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
  
  return final_name;
}



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