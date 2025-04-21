import React, { useState } from 'react';
import {
  Box, TextField, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Chip, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import { blue, grey, pink } from '../theme/colors';
import customers from '../mock/customers';

const CustomerList = () => {
  // 状態管理
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  // 検索とフィルターを適用
  const filteredCustomers = customers
    .filter(customer => {
      return (
        customer.name.includes(searchTerm) ||
        customer.kana.includes(searchTerm) ||
        customer.company.includes(searchTerm) ||
        customer.email.includes(searchTerm)
      );
    })
    .filter(customer => (genderFilter ? customer.gender === genderFilter : true))
    .filter(customer => (typeFilter ? customer.type === typeFilter : true))
    .sort((a, b) => {
      const aValue = a.name.toLowerCase();
      const bValue = b.name.toLowerCase();
      return sortAsc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

  return (
    <Box p={2}>
      {/* 検索・フィルター */}
      <Box display="flex" gap={2} mb={2} flexWrap="wrap">
        <TextField
          label="検索"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            minWidth: '200px',
            border: `2px solid ${blue[500]}`,
            '&:hover': {
              borderColor: blue[700],
            }
          }}
        />
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel>性別</InputLabel>
          <Select
            value={genderFilter}
            label="性別"
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <MenuItem value="">すべて</MenuItem>
            <MenuItem value="男性">男性</MenuItem>
            <MenuItem value="女性">女性</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel>種別</InputLabel>
          <Select
            value={typeFilter}
            label="種別"
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <MenuItem value="">すべて</MenuItem>
            <MenuItem value="個人">個人</MenuItem>
            <MenuItem value="会社">会社</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* 顧客テーブル */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: blue[50] }}>
            <TableRow>
              <TableCell onClick={() => setSortAsc(!sortAsc)} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
                顧客名
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>会社名</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Mail / TEL</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>登録日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography fontWeight="bold">{customer.name}</Typography>
                  <Typography fontSize="0.8rem" color="text.secondary">{customer.kana}</Typography>
                  <Box mt={0.5}>
                    <Chip
                      size="small"
                      label={customer.gender}
                      sx={{
                        backgroundColor: customer.gender === '男性' ? blue[200] : pink[100],
                        color: blue[900],
                        mr: 1
                      }}
                    />
                    <Chip
                      size="small"
                      label={customer.type}
                      sx={{
                        backgroundColor: customer.type === '会社' ? blue[100] : grey[200],
                        color: grey[800]
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>{customer.company}</TableCell>
                <TableCell>
                  <Typography>{customer.email}</Typography>
                  <Typography color="text.secondary" fontSize="0.85rem">{customer.tel}</Typography>
                </TableCell>
                <TableCell>{customer.registeredAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerList; 