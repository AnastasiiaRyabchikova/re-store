import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    return <CircularProgress variant="static" value={progress}/>;
};

export default Spinner;

