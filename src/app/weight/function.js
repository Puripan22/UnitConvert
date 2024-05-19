import units from "./unit";

const test = (val,fromUnit ,toUnit)=>{
    if(fromUnit === units.Kilogram.unit){
        return calWeight(val, units.Kilogram, toUnit, units)
    }
    else if ( fromUnit === units.Gram.unit){
        return calWeight(val, units.Gram, toUnit, units)
    }
    else if ( fromUnit === units.Milligram.unit ){
        return calWeight(val, units.Milligram, toUnit, units)
    }
    else if ( fromUnit === units.Microgram.unit ){
        return calWeight(val, units.Microgram, toUnit, units)
    }
    else if ( fromUnit === units.MetricTon.unit ){
        return calWeight(val, units.MetricTon, toUnit, units)
    }
    else if ( fromUnit === units.Pound.unit ){
        return calWeight(val, units.Pound, toUnit, units)
    }
    else if ( fromUnit === units.Ounce.unit ){
        return calWeight(val, units.Ounce, toUnit, units)
    }
    else if ( fromUnit === units.Stone.unit ){
        return calWeight(val, units.Stone, toUnit, units)
    }
    else if ( fromUnit === units.ShortTon.unit ){
        return calWeight(val, units.ShortTon, toUnit, units)
    }
    else if ( fromUnit === units.LongTon.unit ){
        return calWeight(val, units.LongTon, toUnit, units)
    }
}

const calWeight =(val, unit, toUnit, units)=>{
    if( toUnit === unit.unit ){
        return val
    }
    else if( toUnit === units.Gram.unit){
        return val / unit.prefix * units.Gram.prefix
    }
    else if( toUnit === units.Kilogram.unit){
        return val / unit.prefix * units.Kilogram.prefix
    }
    else if( toUnit === units.Milligram.unit ){
        return val / unit.prefix * units.Milligram.prefix
    }
    else if( toUnit === units.Microgram.unit ){
        return val / unit.prefix * units.Microgram.prefix
    }
    else if( toUnit === units.MetricTon.unit ){
        return val / unit.prefix * units.MetricTon.prefix
    }
    else if( toUnit === units.Pound.unit ){
        return val / unit.prefix * units.Pound.prefix
    }
    else if( toUnit === units.Ounce.unit ){
        return val / unit.prefix * units.Ounce.prefix
    }
    else if( toUnit === units.Stone.unit ){
        return val / unit.prefix * units.Stone.prefix
    }
    else if( toUnit === units.ShortTon.unit ){
        return val / unit.prefix * units.ShortTon.prefix
    }
    else if( toUnit === units.LongTon.unit ){
        return val / unit.prefix * units.LongTon.prefix
    }
}

export default test;