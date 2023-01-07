const moves = [];

function ExHanoi(A, B, C, n) {
  if (n == 1) {
    moves.push([C, B]);
    moves.push([A, C]);
    moves.push([B, A]);
    moves.push([B, C]);
    moves.push([A, C]);
    return;
  } else {
    ExHanoi(A, B, C, n - 1);
    Hanoi(C, A, B, 3 * n - 2);
    moves.push([A, C]);
    Hanoi(B, A, C, 3 * n - 1);
  }
}
