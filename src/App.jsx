import { useState } from 'react';
import './App.css';
import { Box, Button, CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("https://email-reply-generator-latest.onrender.com/api/email/generate", {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
    maxWidth="xl"
    sx={{
      py: 6,
      px: 4,
      backgroundColor: '#fafafa',
      borderRadius: 2,
      boxShadow: 3,
      minHeight: '90vh', // Expand vertically
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Align content vertically
      alignItems: 'center', // Center horizontally
    }}
  >
    <Typography variant='h3' component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Email Reply Generator
      </Typography>
    <Grid container spacing={4} sx={{ height: '100%' }}>
      {/* Input Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ mx: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={10} // Increased rows for better input space
            variant='outlined'
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2, borderRadius: 2, boxShadow: 1 }}
          />
  
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}
              sx={{ borderRadius: 2, boxShadow: 1 }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>
  
          <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' },
              borderRadius: 2,
              padding: '12px',
              boxShadow: 2,
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Generate Reply"}
          </Button>
        </Box>
      </Grid>
  
      {/* Output Section */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ padding: 3, borderRadius: 2, backgroundColor: '#e3f2fd', boxShadow: 2, height: '100%' }}>
          <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={10} // Matches input area for consistency
            variant='outlined'
            value={generatedReply || ''}
            inputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />
          <Button
            variant='outlined'
            sx={{ mt: 2, borderRadius: 2 }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Container>
  
  );
}

export default App;
