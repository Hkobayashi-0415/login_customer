// Login.jsx
// ログイン画面コンポーネント（MUI使用）

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { users } from "../mock/users"; // テストユーザーデータのインポート

export default function Login() {
  // 状態管理（フォーム入力、エラー、パスワード表示制御など）
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  // ログインボタン押下時の処理
  const handleLogin = () => {
    setError("");
    setResult("");

    // 入力チェック
    if (!userId || !password) {
      setError("ユーザーIDとパスワードを入力してください。");
      return;
    }

    // ログイン判定（モックデータと照合）
    if (userId === users[0].id && password === users[0].password) {
      setResult("ログイン成功！");
    } else {
      setError("ユーザーIDまたはパスワードが正しくありません。");
    }
  };

  // パスワード表示・非表示の切り替え
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Container maxWidth="xs">
      {/* ログインフォーム全体のボックス */}
      <Box
        sx={{
          mt: 8,
          p: 4,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: 2,
        }}
      >
        {/* タイトル */}
        <Typography variant="h5" align="center" gutterBottom>
          ログイン画面
        </Typography>

        {/* ユーザーID欄 */}
        <Typography variant="body1" gutterBottom>
          ユーザーID
        </Typography>
        <TextField
          fullWidth
          placeholder="ユーザーID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          margin="dense"
        />

        {/* パスワード欄 */}
        <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
          パスワード
        </Typography>
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="dense"
          InputProps={{
            // パスワード表示切り替えアイコン
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* エラーメッセージ表示 */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {/* 成功メッセージ表示 */}
        {result && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {result}
          </Alert>
        )}

        {/* ログインボタン */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 3 }}
        >
          ログイン
        </Button>
      </Box>
    </Container>
  );
} 