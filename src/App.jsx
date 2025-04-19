import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('Welcome to BMI Calculator');

  const calculateBmi = (data) => {
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height);
    // console.log(weight, height);

    if (weight === 0 || height === 0) {
      alert('Please enter a valid height and weight');
    } 
    else {
      const bmiValue = weight / ((height / 100) ** 2);
      // const roundedBmi = bmiValue.toFixed(1);
      // console.log(bmiValue.toFixed(1));
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage('You are normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  const handleReset = () => {
    console.log("all thing is reset");
    reset({
      "weight": '',
      "height": ''
    });
    setBmi(null);
    setMessage('Welcome to BMI Calculator');
  };

  return (
    <>
      <form onSubmit={handleSubmit(calculateBmi)}>
        <div className="flex items-center justify-center bg-gray-100 h-screen w-full">
          <div className="flex flex-col items-center justify-evenly bg-white h-[550px] w-[400px] border-2 border-gray-300 rounded-lg shadow-md gap-2">
            <h1 className="text-3xl font-bold mt-6">BMI Calculator</h1>
            <div className="flex flex-col items-center justify-evenly w-full h-3/4 gap-4">
              <div className="flex flex-col items-center justify-evenly w-full gap-4">
                <Input
                  type="number"
                  label="Weight (KGs):"
                  placeholder="Enter your weight"
                  className="w-11/12"
                  defaultValue=""
                  {...register('weight', { required: true })}
                />

                <Input
                  type="number"
                  label="Height (CM):"
                  placeholder="Enter your height"
                  className="w-11/12"
                  defaultValue=""
                  {...register('height', { required: true })}
                />
              </div>

              <div className="flex flex-col items-center justify-evenly w-full gap-3">
                <Button
                  className="rounded-xl w-5/6 py-1.5 hover:bg-orange-600 transition-colors duration-300"
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  className="bg-green-400 text-white rounded-xl w-5/6 py-1.5 hover:bg-pink-600 transition-colors duration-300"
                  type="button"
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Reload
                </Button>
              </div>

              <div className="text-lg flex flex-col items-center justify-evenly w-full gap-4">
                <span>
                  Your BMI is:
                  {bmi !== null ? <strong> {bmi} kg/m²</strong> : ' Not calculated yet'}
                </span>
                <span>{message}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
