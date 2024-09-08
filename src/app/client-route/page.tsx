"use client";
import React from 'react';
import { useTheme } from '@/components/theme_provider';
import { clientSideFunction } from '@/utils/client-utils';


export default function ImageSlider() {
    const theme = useTheme();
    const result = clientSideFunction()
    
    return (
        <>
    <h1 style={
        {
            color:theme.colors.primary
        }
    }>Client Route  {result}</h1>
      
      </>
    );
  }
  