for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 1; i < 22; i = i + 2) {
  console.log(i);
  if (i > 22) break;
}

for (let i = 100; i > 0; i--) {
  console.log('time till explosion', i);
}
