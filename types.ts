import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
}