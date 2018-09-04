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
      final_name += ' / ';
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
var terms = ['Initiation', 'Equivalency', 'Equivalence Relation', 'Equivalence Solution', 'Solution', 'Test', 'Maneuver', 'Acquisition', 'Formulation', 'Contraction', 'Expansion', 'Factor', 'Reccurence', 'Diffusion', 'Disintegration', 'Transformation', 'Vortex', 'Malfunction', 'Coefficient', 'Convergence', 'Divergence', 'Limit', 'Excitation', 'Acceleration', 'Attraction', 'Repulsion', 'Pulse', 'Proximity Test', 'Resonance', 'Minimization', 'Insufficiency', 'Thermalization', 'Detoriation', 'Transmission', 'Incursion', 'Combustion', 'Estimation', 'Optimization', 'Sublimation', 'Reverberation', 'Permutation', 'Materialization', 'Submergence', 'Exfoliation', 'Oscillation', 'Fluctuation', 'Application', 'Synthesis', 'Hysteresis', 'Path', 'Chromatic Number', 'Summation', 'Deviation', 'Automation', 'Evaporation', 'Condensation', 'Asymmetry', 'Conundrum', 'Agitation', 'Regulation', 'Dissonance', 'Harmony', 'Initiative']

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
var real_bbt_names = JSON.parse("[\"Pilot\",\"The Big Bran Hypothesis\",\"The Fuzzyboots Corollary\",\"The Luminous Fish Effect\",\"The Hamburger Postulate\",\"The Middle-Earth Paradigm\",\"The Dumpling Paradox\",\"The Grasshopper Experiment\",\"The Cooper-Hofstadter Polarization\",\"The Loobenfeld Decay\",\"The Pancake Batter Anomaly\",\"The Jerusalem Duality\",\"The Bat Jar Conjecture\",\"The Nerdvana Annihilation\",\"The Shiksa Indeterminacy\\\"[30]\\n\\\"The Pork Chop Indeterminacy\\\"[31\",\"The Peanut Reaction\",\"The Tangerine Factor\",\"The Bad Fish Paradigm\",\"The Codpiece Topology\",\"The Barbarian Sublimation\",\"The Griffin Equivalency\",\"The Euclid Alternative\",\"The Cooper–Nowitzki Theorem\",\"The Panty Piñata Polarization\",\"The Lizard–Spock Expansion\",\"The White Asparagus Triangulation\",\"The Vartabedian Conundrum\",\"The Bath Item Gift Hypothesis\",\"The Killer Robot Instability\",\"The Friendship Algorithm\",\"The Financial Permeability\",\"The Maternal Capacitance\",\"The Cushion Saturation\",\"The Terminator Decoupling\",\"The Work Song Nanocluster\",\"The Dead Hooker Juxtaposition\",\"The Hofstadter Isotope\",\"The Vegas Renormalization\",\"The Classified Materials Turbulence\",\"The Monopolar Expedition\",\"The Electric Can Opener Fluctuation\",\"The Jiminy Conjecture\",\"The Gothowitz Deviation\",\"The Pirate Solution\",\"The Creepy Candy Coating Corollary\",\"The Cornhusker Vortex\",\"The Guitarist Amplification\",\"The Adhesive Duck Deficiency\",\"The Vengeance Formulation\",\"The Gorilla Experiment\",\"The Maternal Congruence\",\"The Psychic Vortex\",\"The Bozeman Reaction\",\"The Einstein Approximation\",\"The Large Hadron Collision\",\"The Excelsior Acquisition\",\"The Precious Fragmentation\",\"The Pants Alternative\",\"The Wheaton Recurrence\",\"The Spaghetti Catalyst\",\"The Plimpton Stimulation\",\"The Staircase Implementation\",\"The Lunar Excitation\",\"The Robotic Manipulation\",\"The Cruciferous Vegetable Amplification\",\"The Zazzy Substitution\",\"The Hot Troll Deviation\",\"The Desperation Emanation\",\"The Irish Pub Formulation\",\"The Apology Insufficiency\",\"The 21-Second Excitation\",\"The Boyfriend Complexity\",\"The Alien Parasite Hypothesis\",\"The Justice League Recombination\",\"The Bus Pants Utilization\",\"The Love Car Displacement\",\"The Thespian Catalyst\",\"The Benefactor Factor\",\"The Cohabitation Formulation\",\"The Toast Derivation\",\"The Prestidigitation Approximation\",\"The Zarnecki Incursion\",\"The Herb Garden Germination\",\"The Agreement Dissection\",\"The Wildebeest Implementation\",\"The Engagement Reaction\",\"The Roommate Transmogrification\",\"The Skank Reflex Analysis\",\"The Infestation Hypothesis\",\"The Pulled Groin Extrapolation\",\"The Wiggly Finger Catalyst\",\"The Russian Rocket Reaction\",\"The Rhinitis Revelation\",\"The Good Guy Fluctuation\",\"The Isolation Permutation\",\"The Ornithophobia Diffusion\",\"The Flaming Spittoon Acquisition\",\"The Speckerman Recurrence\",\"The Shiny Trinket Maneuver\",\"The Recombination Hypothesis\",\"The Beta Test Initiation\",\"The Friendship Contraction\",\"The Vacation Solution\",\"The Rothman Disintegration\",\"The Werewolf Transformation\",\"The Weekend Vortex\",\"The Transporter Malfunction\",\"The Hawking Excitation\",\"The Stag Convergence\",\"The Launch Acceleration\",\"The Countdown Reflection\",\"The Date Night Variable\",\"The Decoupling Fluctuation\",\"The Higgs Boson Observation\",\"The Re-Entry Minimization\",\"The Holographic Excitation\",\"The Extract Obliteration\",\"The Habitation Configuration\",\"The 43 Peculiarity\",\"The Parking Spot Escalation\",\"The Fish Guts Displacement\",\"The Santa Simulation\",\"The Egg Salad Equivalency\",\"The Bakersfield Expedition\",\"The Cooper/Kripke Inversion\",\"The Spoiler Alert Segmentation\",\"The Tangible Affection Proof\",\"The Monster Isolation\",\"The Contractual Obligation Implementation\",\"The Closet Reconfiguration\",\"The Tenure Turbulence\",\"The Closure Alternative\",\"The Proton Resurgence\",\"The Love Spell Potential\",\"The Bon Voyage Reaction\",\"The Hofstadter Insufficiency\",\"The Deception Verification\",\"The Scavenger Vortex\",\"The Raiders Minimization\",\"The Workplace Proximity\",\"The Romance Resonance\",\"The Proton Displacement\",\"The Itchy Brain Simulation\",\"The Thanksgiving Decoupling\",\"The Discovery Dissipation\",\"The Cooper Extraction\",\"The Hesitation Ramification\",\"The Occupation Recalibration\",\"The Convention Conundrum\",\"The Locomotive Manipulation\",\"The Table Polarization\",\"The Friendship Turbulence\",\"The Mommy Observation\",\"The Indecision Amalgamation\",\"The Relationship Diremption\",\"The Anything Can Happen Recurrence\",\"The Proton Transmogrification\",\"The Gorilla Dissolution\",\"The Status Quo Combustion\",\"The Locomotion Interruption\",\"The Junior Professor Solution\",\"The First Pitch Insufficiency\",\"The Hook-Up Reverberation\",\"The Focus Attenuation\",\"The Expedition Approximation\",\"The Misinterpretation Agitation\",\"The Prom Equivalency\",\"The Septum Deviation\",\"The Champagne Reflection\",\"The Clean Room Infiltration\",\"The Space Probe Disintegration\",\"The Anxiety Optimization\",\"The Troll Manifestation\",\"The Comic Book Store Regeneration\",\"The Intimacy Acceleration\",\"The Colonization Application\",\"The Leftover Thermalization\",\"The Skywalker Incursion\",\"The Fortification Implementation\",\"The Communication Deterioration\",\"The Graduation Transmission\",\"The Maternal Combustion\",\"The Commitment Determination\",\"The Matrimonial Momentum\",\"The Separation Oscillation\",\"The Bachelor Party Corrosion\",\"The 2003 Approximation\",\"The Perspiration Implementation\",\"The Helium Insufficiency\",\"The Spock Resonance\",\"The Mystery Date Observation\",\"The Platonic Permutation\",\"The Earworm Reverberation\",\"The Opening Night Excitation\",\"The Sales Call Sublimation\",\"The Empathy Optimization\",\"The Meemaw Materialization\",\"The Valentino Submergence\",\"The Positive Negative Reaction\",\"The Celebration Experimentation\",\"The Application Deterioration\",\"The Solder Excursion Diversion\",\"The Big Bear Precipitation\",\"The Viewing Party Combustion\",\"The Fermentation Bifurcation\",\"The Line Substitution Solution\",\"The Convergence Convergence\",\"The Conjugal Conjecture\",\"The Military Miniaturization\",\"The Dependence Transcendence\",\"The Cohabitation Experimentation\",\"The Hot Tub Contamination\",\"The Fetal Kick Catalyst\",\"The Veracity Elasticity\",\"The Brain Bowl Incubation\",\"The Geology Elevation\",\"The Property Division Collision\",\"The Birthday Synchronicity\",\"The Holiday Summation\",\"The Romance Recalibration\",\"The Emotion Detection Automation\",\"The Locomotion Reverberation\",\"The Allowance Evaporation\",\"The Comic-Con Conundrum\",\"The Escape Hatch Identification\",\"The Collaboration Fluctuation\",\"The Recollection Dissipation\",\"The Separation Agitation\",\"The Cognition Regeneration\",\"The Gyroscopic Collapse\",\"The Long Distance Dissonance\",\"The Proposal Proposal\",\"The Retraction Reaction\",\"The Relaxation Integration\",\"The Explosion Implosion\",\"The Collaboration Contamination\",\"The Proton Regeneration\",\"The Geology Methodology\",\"The Tesla Recoil\",\"The Bitcoin Entanglement\",\"The Confidence Erosion\",\"The Celebration Reverberation\",\"The Matrimonial Metric\",\"The Solo Oscillation\",\"The Separation Triangulation\",\"The Novelization Correlation\",\"The Neonatal Nomenclature\",\"The Athenaeum Allocation\",\"The Gates Excitation\",\"The Tenant Disassociation\",\"The Reclusive Potential\",\"The Comet Polarization\",\"The Monetary Insufficiency\",\"The Sibling Realignment\",\"The Bow Tie Asymmetry\",\"The Conjugal Configuration\\\"[271\",\"The Wedding Gift Wormhole\\\"[272\"]")