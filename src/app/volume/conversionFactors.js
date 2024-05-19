let CalFuntion = (Input_Unit,Output_Unit) =>{

  //console.log(Categorical_Data['A'][Input_Unit],"1111")
  return Categorical_Data.A[Output_Unit]/Categorical_Data.A[Input_Unit];



}
const Categorical_Data = {
  A: {
    CubicMeter:1000,
    Liter: 1,
    Milliliter: 0.000001,
    CubicMillimeter: 1000,
    Hectoliter: 100,
    Decaliter: 10,
    Deciliter: 1e-1,
    Centiliter: 1e-2,
    CubicInch: 0.0163871,
    CubicFoot:28.3168,
    CubicYard:764.555,
    GallonUK:4.54609,
    GallonUS:3.78541,
    QuartUK:1.13652,
    QuartUS:0.946353,
    PintUK:0.568261,
    PintUS:0.473176,
    FluidOunceUK:0.0284131,
    FluidOunceUS:0.0295735,
    OilBarrel: 159,
    Teaspoon:0.00492892,
    Tablespoon:0.0147868
  }
};

export default  Categorical_Data ;
export {CalFuntion};