import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '70vh' }}
    >
      <Box sx={{ width: '20%' }}>
        <LinearProgress
          sx={{
            bgcolor: 'rgba(31, 21, 17,0.6)',
            '& .MuiLinearProgress-bar': { bgcolor: 'rgba(31, 21, 17,0.8)' },
          }}
        />
      </Box>
    </div>
  );
}

export default Loading;
