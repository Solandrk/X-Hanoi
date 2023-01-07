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

function createDisks(rod, rodDisks, diskCount) {
  rod.children(".disk").remove();
  for (let i = 0; i < diskCount; i++) {
    let disk = $("<div></div>");
    disk.addClass("disk");
    disk.css("background-color", getRandomColor());
    disk.css("width", 90 - i * 10);
    disk.css("bottom", i * 10);
    rod.append(disk);
    rodDisks.push(disk);
  }
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveDisk(disk, rod) {
  let bottom = disk.css("bottom");
  let left = disk.position().left;
  disk.animate(
    {
      bottom: "100%",
    },
    {
      duration: 1000,
    }
  );
  disk.animate(
    {
      left: rod.offset().left -left,
    },
    {
      duration: 1000,
      complete: () => {
        disk.css({left:left});
        rod.append(disk);
      },
    }
  );

  disk.animate(
    {
      bottom: bottom,
    },
    {
      duration: 1000,
    }
  );
}
